import React, { useEffect } from 'react';
import { Route, Link, } from "react-router-dom";
import './App.css';


import Login from "./components/Forms/Login.js";
import SignUp from "./components/Forms/SignUp.js";
import Dashboard from "./components/Dashboard";
import InventoryList from "./components/InventoryList";
import AddProduct from "./components/AddProduct";
import EditName from "./components/EditName";
import PrivateRoute from "./components/PrivateRoute";
import InventoryItem from './components/InventoryItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>African Marketplace</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link> 
        </nav>
      </header>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <PrivateRoute exact path="/dashboard/">
        <Dashboard />
      </PrivateRoute>
      <PrivateRoute exact path="/inventory/">
      <InventoryList />
      </PrivateRoute>
      <PrivateRoute exact path="/product/:id">
        <InventoryItem />
      </PrivateRoute>
      <PrivateRoute exact path="/add-products">
        <AddProduct />
      </PrivateRoute>
      <PrivateRoute exact path="/name-editor/:id">
        <EditName />
      </PrivateRoute>
    </div>
  );
}

export default App;
