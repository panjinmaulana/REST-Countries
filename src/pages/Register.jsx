import React, { useState } from "react";
import { useHistory } from "react-router";

export default function Register() {
  const [input, setInput] = useState({ email: "", password: "" });

  const history = useHistory();

  function handleOnChange(e) {
    const { name, value } = e.target;

    setInput({ ...input, [name]: value });
  }

  function handleOnClick(e) {
    e.preventDefault();

    if (input.email && input.password) {
      localStorage.setItem(input.email, input.password);

      history.push("/login");
    } else {
      console.log("Field email & password is required.");
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="text-center my-3">Register</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <form
            style={{
              width: "30%",
              margin: "0 auto",
              padding: "30px",
              borderRadius: "13px",
              boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
            }}
          >
            <div class="mb-3">
              <label for="email" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                name="email"
                onChange={(e) => handleOnChange(e)}
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                name="password"
                onChange={(e) => handleOnChange(e)}
              />
            </div>
            <button
              type="button"
              class="btn btn-success"
              onClick={(e) => handleOnClick(e)}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
