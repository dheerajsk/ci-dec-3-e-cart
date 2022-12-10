import { useState } from "react";
import "./Register.css";

function Register() {
  const [user, setUser] = useState({});

  function handleSubmit() {
    console.log(user);
  }

  return (
    <div className="container">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Email address
        </label>
        <input
          onInput={(e) => {
            user.email = e.target.value;
            setUser(user);
          }}
          value={user.email}
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"></input>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Full Name
        </label>
        <input
          onInput={(e) => {
            user.name = e.target.value;
            setUser(user);
          }}
          value={user.name}
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"></input>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Password
        </label>
        <input
          onInput={(e) => {
            user.password = e.target.value;
            setUser(user);
          }}
          value={user.password}
          type="password"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"></input>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Date of Birth
        </label>
        <input
          onInput={(e) => {
            user.dob = e.target.value;
            setUser(user);
          }}
          value={user.dob}
          type="date"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"></input>
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Country
        </label>
        <select
          class="form-select"
          aria-label="Default select example"
          onChange={(e) => {
            user.country = e.target.value;
            setUser(user);
          }}>
          <option value="1">India</option>
          <option value="2">USA</option>
          <option value="3">UK</option>
        </select>
      </div>
      <input
        onClick={handleSubmit}
        className="btn btn-primary"
        value="Register"
        type="submit"
      />
    </div>
  );
}

export default Register;
