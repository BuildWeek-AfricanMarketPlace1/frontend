import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
	.card {
		display: flex;
		flex-wrap:wrap;
		background: WHITESMOKE;
		display: flex;
		justify-content: space-around

		border-radius: 2px;

		height: 125px;
		margin: 1rem;
		width: 20%;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
		transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
	}
	.card:hover {
		box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
	}
	.card h2 {
		text-align: center;
		color: black;
		transition: all 0.5s ease-in-out;
		&:hover {
			color: darkblue;
			transition: all 0.5s ease-in-out;
		}
	}
	body {
		text-decoration: none;
	}
`

const Cards = ({ onLocations }) => {
	console.log('data', onLocations)
	return (
		<div>
			{onLocations.map((loc) => (
				<StyledDiv>
					<div className="card">
						<h2>{loc.locname}</h2>
					</div>
				</StyledDiv>
			))}
		</div>
	)
}

export default Cards
