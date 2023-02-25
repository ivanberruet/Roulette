import React from 'react'
import { numbers } from '../data/numbers'

export default function History(props) {
	const history = props.history;
	
	return (
		<div className='history_container'>
			<p><span className='title'>Historial:</span></p>
			<div className="history_grid">
				{history.map((item,index)=>{
						let cellClass = "history_cell"	
						cellClass+=" "+numbers[item.value].color
						return(
								<div key={index} className={cellClass}>
									{item.value}
								</div>
						)
					})}
				</div>
		</div>
	)
}
