import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'

import Login from './components/Forms/Login.js'
import SignUp from './components/Forms/SignUp.js'
import Dashboard from './components/Dashboard'
import InventoryList from './components/InventoryList'
import AddProduct from './components/AddProduct'
import UpdateName from './components/UpdateName'
import PrivateRoute from './components/PrivateRoute'
import InventoryItem from './components/InventoryItem'
import AddItemCategory from './components/AddItemCategory'
import Navbar from './components/Nav/Navbar'
import GlobalStyle from './globalStyles.js'

function App() {
	return (
		<div className="App">
			<Router>
				<GlobalStyle />
			</Router>
			<Navbar />
			<Route path="/login">
				<Login />
			</Route>
			<Route path="/signup">
				<SignUp />
			</Route>
			<PrivateRoute exact path="/dashboard">
				<Dashboard />
			</PrivateRoute>
			<PrivateRoute exact path="/inventory">
				<InventoryList />
			</PrivateRoute>
			<PrivateRoute exact path="/product/:id">
				<InventoryItem />
			</PrivateRoute>
			<PrivateRoute exact path="/add-products">
				<AddProduct />
			</PrivateRoute>
			<PrivateRoute exact path="/name-editor/:id">
				<UpdateName />
			</PrivateRoute>
			<PrivateRoute exact path="/add-category">
				<AddItemCategory />
			</PrivateRoute>
		</div>
	)
}

export default App
