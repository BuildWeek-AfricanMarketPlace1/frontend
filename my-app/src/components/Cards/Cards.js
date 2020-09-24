import React from 'react'

const Cards = (props) => {
	console.log('data', props.onLocations)
	return (
		<div>
			{props.onLocations.map((loc) => {
				return <p key={loc.id}>{loc.locname}</p>
			})}
		</div>
	)
}

export default Cards
