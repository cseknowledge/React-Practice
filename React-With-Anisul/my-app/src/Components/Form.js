import React, { useState } from "react";
import Style from "./form.module.css";

export default function Form() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const { name, email, password } = user;
  const handleUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <div style={{ background: "white", padding: "15px" }}>
      <h1>User Registration</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className={Style.input_group}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleUser}
            required
          />
        </div>
        <div className={Style.input_group}>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleUser}
            required
          />
        </div>
        <div className={Style.input_group}>
          <label>Password: </label>
          <input
            type="text"
            name="password"
            value={password}
            onChange={handleUser}
            required
          />
        </div>
        <div className={Style.input_group}>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}
