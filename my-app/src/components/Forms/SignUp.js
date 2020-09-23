import "./Login.css";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import React, { useState, useEffect } from "react";
import * as yup from "yup";
import schema from "./validate-signup";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";

const intitialformvalues = {
  // strings
  email: "",
  password: "",
  // check box
  terms: false,
};
const initialFormErrors = {
  email: "",
  password: "",
  terms: "",
};

export default function RegistryForm(props) {
  const [Users, setUsers] = useState({});
  const [formValues, setFormValues] = useState(intitialformvalues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);
  const history = useHistory();

  const addNewUser = (newuser) => {
    axiosWithAuth()
      .post("api/auth/register", newuser)
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.payload);
        history.push("/dashboard");
      })
      .catch((error) => {
        alert("Register failed.");
      })
      .finally(() => {

      })
    console.log(newuser);
    setFormValues(intitialformvalues);
  };

  const validate = (email, value) => {
    yup
      .reach(schema, email)

      .validate(value)

      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [email]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [email]: err.errors[0],
        });
      });
  };

  const inputChange = (email, value) => {
    validate(email, value);
    setFormValues({
      ...formValues,
      [email]: value,
    });
  };

  const formSubmit = () => {
    const newuser = {
      email: formValues.email.trim(),
      password: formValues.password.trim(),

    }
    addNewUser(newuser)
  }

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  const Submit = (evt) => {
    evt.preventDefault();
    formSubmit();
  };
  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    inputChange(name, valueToUse);
  };
  return (
    <div>
      <Link to="/Login">Already have an account?</Link>
      <form className="registryform" onSubmit={Submit}>
        <h2>Register</h2>
        <div className="inputs">
          <label>
            Email:{<br></br>}
            <input
              value={formValues.email}
              onChange={onChange}
              name="email"
              type="text"
            />
          </label>
          {<br></br>}
          <label>
            Password:{<br></br>}
            <input
              value={formValues.password}
              onChange={onChange}
              name="password"
              type="text"
            />
          </label>
          {<br></br>}

          <label>
            {" "}
            I agree to the Terms and conditions
            <input
              type="checkbox"
              name="terms"
              checked={formValues.terms}
              onChange={onChange}
            />
          </label>
        </div>
        <div className="submitarea">
          <div className="errors">
            <div>{formErrors.email}</div>
            <div>{formErrors.password}</div>
            <div>{formErrors.terms}</div>
          </div>
          <button id="submitbutton" disabled={disabled}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
