import React from 'react';
import { Route, Link, } from "react-router-dom";
import './App.css';
import Login from "./components/Forms/Login.js";
import SignUp from "./components/Forms/SignUp.js";
import InventoryPage from "./components/InventoryPage";

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
      <InventoryPage />
    </div>
  );
}

export default App;
