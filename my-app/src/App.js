import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

import Login from "./components/Forms/Login.js";
import SignUp from "./components/Forms/SignUp.js";
import Dashboard from "./components/Dashboard";
import InventoryList from "./components/InventoryList";
import AddProduct from "./components/AddProduct";
import UpdateName from "./components/UpdateName";
import PrivateRoute from "./components/PrivateRoute";
import InventoryItem from "./components/InventoryItem";
import AddItemCategory from "./components/AddItemCategory";
import { fetchItemCategories } from "./store/actions/actions";
import { Navbar, Footer } from './components'

import GlobalStyle from './globalStyles.js'
import Home from './pages/HomePage/Home'
import ScrollToTop from './components/ScrollToTop'

function App({ fetchItemCategories }) {
  useEffect(() => {
    fetchItemCategories();
  }, [fetchItemCategories]);

  return (
		<Router>
			<GlobalStyle />
			<ScrollToTop />
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
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
				<Route path="/login" component={Login} />
				<Route path="/sign-up" component={SignUp} />
			</Switch>
			<Footer />
		</Router>
  )		

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, { fetchItemCategories })(App);

