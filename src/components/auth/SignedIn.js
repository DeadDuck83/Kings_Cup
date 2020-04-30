import React, { useState } from "react";
import Jumbotron from "../dashboard/Jumbotron";

const SignedIn = () => {
  const [login, setlogin] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setlogin({ ...login, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(login);
  };
  return (
    <div className="signIn">
      <Jumbotron />
      <div className="container">
        <form onSubmit={handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htlmfor="email">Email</label>
            <input type="email" id="email" onChange={handleChange} />
          </div>
          <div className="input-field">
            <label htlmfor="password">Password</label>
            <input type="password" id="password" onChange={handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
          </div>
        </form>
        <h2>email: {login.email}</h2>
        <h2>password: {login.password}</h2>
      </div>
    </div>
  );
};

export default SignedIn;
