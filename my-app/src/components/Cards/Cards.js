import React from 'react'

const Cards = ({ onLocations }) => {
	console.log('data', onLocations)
	return (
		<>
			{/* <h2>Locations</h2>
			{onLocations.map((local) => {
				return (
					<div key={local.id}>
						<p>{local.locname}</p>
					</div>
				)
			})} */}
		</>
	)
}

// return <>{ onlocations.map((local) => (

//             return
//             <h2>test</h2>
// 		))} }</>

export default Cards
