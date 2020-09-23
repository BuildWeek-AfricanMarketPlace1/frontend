import React from 'react'
import { useState } from 'react'
import './Login.css'
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { useHistory } from "react-router-dom";


function SignUp() {
  const [user, setUser] = useState({ 
    firstName: "", 
    lastName: "", 
    email:"", 
    password: "", 
    confirmPassword: ""
   });

   const history = useHistory();

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axiosWithAuth()
      .post("api/auth/register", user)
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.payload);
        history.push("/dashboard");
      })
      .catch((error) => {
        alert("Register failed.");
      });
  };

  return (
    <div className="logIn">
      {console.log(user)}
      <form onSubmit={event => handleSubmit(event)} id ="loginform">
        <label>
         <p> Enter First Name:</p>
          <input
            type="text"
            name="name"
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
          Enter Last Name:
          <input
            type="text"
            name="name"
            onChange={event => handleChange(event)}
          />
          </label>
           <label>
        Email:
          <input
            type="text"
            name="email"
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={event => handleChange(event)}
          />
       
        </label>
        <button>Submit!</button>
      </form>
    </div>
  );
}

export default SignUp;
  