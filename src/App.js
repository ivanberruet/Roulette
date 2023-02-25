import React, { useState, useEffect } from 'react'
import './App.css';
import History from './components/History';
import Roullete from './components/Roullete';

function App() {

	const [number, setNumber] = useState(0)
	const [history, setHistory] = useState([])
	const [highLowStreak, setHighLowStreak] = useState(
		{
			highStreak: 0, 
			lowStreak: 0
		}
	)
	const [oddEvenStreak, setOddEvenStreak] = useState(
		{
			oddStreak: 0, 
			evenStreak: 0
		}
	)
	const [blackRedStreak, setBlackRedStreak] = useState(
		{
			blackStreak: 0, 
			redStreak: 0
		}
	)
	const [columnsStreak, setColumnsStreak] = useState(
		{
			columnOneStreak: 0,
			columnTwoStreak: 0,
			columnThreeStreak: 0
		}
	)
	const [dozensStreak, setDozensStreak] = useState(
		{
			dozenOneStreak: 0, 
			dozenTwoStreak: 0, 
			dozenThreeStreak: 0
		}
	)
	const initialBet = 100
	const [bet, setBet] = useState(initialBet)
	const [seqColor, setSeqColor] = useState("red")
	const [plays, setPlays] = useState(0)

	console.log(seqColor);
	console.log(plays);
  return (
    <div className="App">
			<div className="top_App">
				<Roullete 
					setNumber={setNumber} 
					setHistory={setHistory} 
					setHighLowStreak={setHighLowStreak}
					setOddEvenStreak={setOddEvenStreak}
					setBlackRedStreak={setBlackRedStreak}
					setColumnsStreak={setColumnsStreak}
					setDozensStreak={setDozensStreak}
					setBet={setBet}
					initialBet={initialBet}
					setSeqColor={setSeqColor}
					setPlays={setPlays}
					plays={plays}
				/>
				<div className='info_container'>
					<History history={history} />
					<div className="divider"></div>
					<div className='streaks_container'>
						<p><span className="title">Alto:</span> {highLowStreak.highStreak}</p>
						<p><span className="title">Bajo:</span> {highLowStreak.lowStreak}</p>
						<div className="divider"></div>
						<p><span className="title">Par:</span> {oddEvenStreak.evenStreak}</p>
						<p><span className="title">Impar:</span> {oddEvenStreak.oddStreak}</p>
						<div className="divider"></div>
						<p><span className="title">Rojo:</span> {blackRedStreak.redStreak}</p>
						<p><span className="title">Negro:</span> {blackRedStreak.blackStreak}</p>
						<div className="divider"></div>
						<p><span className="title">1ra Columna:</span> {columnsStreak.columnOneStreak}</p>
						<p><span className="title">2da Columna:</span> {columnsStreak.columnTwoStreak}</p>
						<p><span className="title">3ra Columna:</span> {columnsStreak.columnThreeStreak}</p>
						<div className="divider"></div>
						<p><span className="title">1ra Docena:</span> {dozensStreak.dozenOneStreak}</p>
						<p><span className="title">2da Docena:</span> {dozensStreak.dozenTwoStreak}</p>
						<p><span className="title">3ra Docena:</span> {dozensStreak.dozenThreeStreak}</p>
					</div>
				</div>
			</div>
			<div className="bottom_App">
				<p><span className='title'>Secuencia Rojo/Negro</span></p>
				<p><span className='title'>Apuesta: {bet} al {seqColor==="red"?"Rojo":"Negro"}</span></p>
			</div>
		</div>
  );
}

export default App;
