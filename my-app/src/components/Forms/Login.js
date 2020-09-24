import * as yup from "yup";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
//Commented our useRouteMatch from react-router-dom since it isn't being used
import schema from "./validate-login";
import "./Login.css";

const initialValues = {
  email: "",
  password: "",
};

const initialErrors = {
  email: "",
  password: "",
  request: "",
};

const initialDisabled = true;

const Login = () => {
  let history = useHistory();

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then((valid) => {
        console.log(valid);
        setErrors({ ...errors, [name]: "" });
      })
      .catch((err) => {
        console.log(err);
        setErrors({ ...errors, [name]: err.errors[0] });
      });
  };

  const update = (name, value) => {
    validate(name, value);
    setValues({ ...values, [name]: value });
  };

  const attemptLogin = (userInfo) => {
    axiosWithAuth()
      .post("api/auth/login", userInfo)
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.payload);
        localStorage.setItem("id", response.data.data.id);
        history.push("/dashboard");
      })
      .catch((error) => {
        console.log(error);
        alert("Login failed.");
      });
    // .finally(() => {
    //   setValues(initialValues)
    // })
  };

  const submit = () => {
    const userInfo = {
      email: values.email.trim(),
      password: values.password.trim(),
    };
    attemptLogin(userInfo);
  };

  useEffect(() => {
    schema.isValid(values).then((valid) => {
      setDisabled(!valid);
    });
  }, [values]);

  // const { url, path } = useRouteMatch();

  const onChange = (evt) => {
    const { name, value } = evt.target;
    update(name, value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <div>
      <div className="left">
        <Link to="SignUp">create an account</Link>
      </div>
      <div className="right">
        <h2>Log In</h2>
        <form onSubmit={onSubmit}>
          <input
            name="email"
            type="text"
            placeholder="email"
            value={values.email}
            onChange={onChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={values.password}
            onChange={onChange}
          />
          <button disabled={disabled} type="submit">
            Log In
          </button>
          <div>
            <span style={{ color: "red" }}>{errors.email}</span>
            <br />
            <span style={{ color: "red" }}>{errors.password}</span>
            <br />
            <span style={{ color: "red" }}>{errors.request}</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
