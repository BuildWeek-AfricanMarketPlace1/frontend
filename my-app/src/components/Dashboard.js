import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Cards from './Cards/Cards.js'

const Dashboard = () => {
	const [locations, setLocations] = useState([])
	const URL = `https://african-market712.herokuapp.com/api/locations`

	useEffect(() => {
		axios
			.get(URL)
			.then((response) => {
				console.log('then', response.data.data)
				setLocations(response.data.data)
			})
			.catch((err) => console.log('error', err))
	}, [])
	// console.log('loc', locations)
	return (
		<div className="Dashboard">
			<h2>Your Locations</h2>
			<Cards onLocations={locations} />
			<Link exact to={'/inventory'}>
				<h4>Click here to view your inventory</h4>
			</Link>
		</div>
	)
}

export default Dashboard
