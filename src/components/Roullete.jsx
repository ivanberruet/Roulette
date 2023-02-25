import {numbers} from '../data/numbers.js'
// import { numbers } from "../data/numbers"
import { reds } from "../data/reds"
import { blacks } from "../data/blacks"
import { redSeq } from "../data/redSeq"

export default function Roullete(props) {
	const setNumber = props.setNumber
	const setHistory = props.setHistory
	const setHighLowStreak = props.setHighLowStreak
	const setOddEvenStreak = props.setOddEvenStreak
	const setBlackRedStreak = props.setBlackRedStreak
	const setColumnsStreak = props.setColumnsStreak
	const setDozensStreak = props.setDozensStreak
	const setBet = props.setBet
	const initialBet = props.initialBet
	const setSeqColor = props.setSeqColor
	const setPlays = props.setPlays
	const plays = props.plays
	
	const historyLength = 15
	
	function handleClick(newNumber){
		let cells = Array.from(document.querySelectorAll('.number'))
		cells.map(cell=>{
			if(parseInt(cell.innerHTML)===newNumber){
				cell.classList.add('selected')
			}else{
				cell.classList.remove('selected')
			}
		})
		setNumber(newNumber)
		setHistory(oldHistory=>{
			let newArray = oldHistory
			if (newArray.length===historyLength){
				newArray = newArray.slice(1,historyLength)
			}
			numbers.map(item=>{
				if(newNumber===item.value){
					newArray.push(
						{
							value: item.value,
							class: item.color
						}
					)			
				}
			})
			return newArray
		})
		setHighLowStreak(oldHighLowStreak =>{
			let newObject
			if(newNumber<=18 && newNumber>0){
				newObject=
				{
					...oldHighLowStreak,
					highStreak: 0,
					lowStreak: oldHighLowStreak.lowStreak + 1 
				}	
			}
			else if(newNumber>=19){
				newObject=
				{
					...oldHighLowStreak,
					highStreak: oldHighLowStreak.highStreak + 1,
					lowStreak: 0 
				}	
			}
			return newObject
		})
		setOddEvenStreak(oldOddEvenStreak => {
			let newObject
			if(newNumber%2===0){
				newObject=
					{
						...oldOddEvenStreak,
						oddStreak: 0,
						evenStreak: oldOddEvenStreak.evenStreak + 1
					}
			}
			else{
				newObject=
					{
						...oldOddEvenStreak,
						oddStreak: oldOddEvenStreak.oddStreak + 1,
						evenStreak: 0
					}
			}
			return newObject
		})
		setBlackRedStreak(oldBlackRedStreak => {
			let newObject
			if(reds.includes(newNumber)){
				newObject=
					{
						...oldBlackRedStreak,
						blackStreak: 0,
						redStreak: oldBlackRedStreak.redStreak + 1
					}
			}
			else if(blacks.includes(newNumber)){
				newObject=
					{
						...oldBlackRedStreak,
						blackStreak: oldBlackRedStreak.blackStreak + 1,
						redStreak: 0
					}
			}
			return newObject
		})
		setColumnsStreak(oldColumnsStreak => {
			let newObject
			if(newNumber!=0){
				if(newNumber%3===1){
					newObject=
						{
							...oldColumnsStreak,
							columnOneStreak: oldColumnsStreak.columnOneStreak + 1,
							columnTwoStreak: 0,
							columnThreeStreak: 0
						}
				}
				else if(newNumber%3===2){
					newObject=
						{
							...oldColumnsStreak,
							columnOneStreak: 0,
							columnTwoStreak: oldColumnsStreak.columnTwoStreak + 1,
							columnThreeStreak: 0
						}
				}
				else{
					newObject=
						{
							...oldColumnsStreak,
							columnOneStreak: 0,
							columnTwoStreak: 0,
							columnThreeStreak: oldColumnsStreak.columnThreeStreak + 1
						}
				}
			}
			return newObject
		})
		setDozensStreak(oldDozensStreak => {
			let newObject
			numbers.map(item=>{
				if(item.value===newNumber){
					if(item.dozen===1){
						newObject=
							{
								...oldDozensStreak,
								dozenOneStreak: oldDozensStreak.dozenOneStreak+1, 
								dozenTwoStreak: 0, 
								dozenThreeStreak: 0
							}
					}
					else if(item.dozen===2){
						newObject=
							{
								...oldDozensStreak,
								dozenOneStreak: 0, 
								dozenTwoStreak: oldDozensStreak.dozenTwoStreak+1, 
								dozenThreeStreak: 0
						 }
					}
					else if (item.dozen===3){
						newObject=
							{
								...oldDozensStreak,
								dozenOneStreak: 0, 
								dozenTwoStreak: 0, 
								dozenThreeStreak: oldDozensStreak.dozenThreeStreak+1
						 }
					}
				}
			})	
			return newObject
		})
		setBet(oldBet=>{
			let currentColor = redSeq[plays%6]
			let winColor
			let newBet
			numbers.map(item=>{
				if(item.value===newNumber){
					winColor = item.color
				}
			})
			if(currentColor===winColor){
				newBet=initialBet
			}
			else{
				newBet= oldBet*2
			}
	
			return newBet
		})
		setSeqColor(()=>{
			let nextColor = redSeq[(plays%6+1)%6]
			return nextColor
		})
		setPlays(oldPlays=>oldPlays+1)	
	}

	return (
		<div className="roulette_container">
			<div className="roulette">
				{numbers.map(item=>{
					let cellClass = "number"	
					if (item.value===0) {cellClass+=" col_span_3"}
					else if (item.color==="red"){cellClass+=" red"}
					else if (item.color==="black"){cellClass+=" black"}
					else{cellClass+=" green"}
					return(
						<div className={cellClass} key={item.value} id={item.value} onClick={()=>(handleClick(item.value))}>
							{item.value}
						</div>
					)
				})}
			</div>
		</div>
)
}
