import React, { useState } from "react";
import Jumbotron from "../dashboard/Jumbotron";

const SignedUp = () => {
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newUser);
  };
  return (
    <div className="signIn">
      <Jumbotron />
      <div className="container">
        <form onSubmit={handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htlmfor="email">Email</label>
            <input type="email" id="email" onChange={handleChange} />
          </div>
          <div className="input-field">
            <label htlmfor="password">Password</label>
            <input type="password" id="password" onChange={handleChange} />
          </div>
          <div className="input-field">
            <label htlmfor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={handleChange} />
          </div>
          <div className="input-field">
            <label htlmfor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={handleChange} />
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
          </div>
        </form>
        <h2>email: {newUser.email}</h2>
        <h2>password: {newUser.password}</h2>
        <h2>first Name: {newUser.firstName}</h2>
        <h2>last name: {newUser.lastName}</h2>
      </div>
    </div>
  );
};

export default SignedUp;
