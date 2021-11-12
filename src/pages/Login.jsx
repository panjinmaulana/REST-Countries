import React, { useState } from "react";

import Register from "./Register";

export default function Login({ setIsLogin }) {
  const [input, setInput] = useState({ email: "", password: "" });
  const [showMessage, setShowMessage] = useState("");
  const [showRegister, setShowRegister] = useState(false);

  function handleOnChange(e) {
    const { name, value } = e.target;

    setInput({ ...input, [name]: value });
  }

  function handleOnClick(e) {
    e.preventDefault(e);

    if (
      localStorage.getItem("email") === input.email &&
      localStorage.getItem("password") === input.password
    ) {
      localStorage.setItem("isLogin", true);
      setIsLogin(true);
    } else {
      setInput({ email: "", password: "" });
      setShowMessage("Not authorized");
      setTimeout(() => {
        setShowMessage("");
      }, 3000);
    }
  }

  function handleToRegister(e) {
    e.preventDefault();

    setShowRegister(true);
  }

  if (showRegister) {
    return <Register setShowRegister={setShowRegister} />;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="text-center my-3">Login</h1>
        </div>
      </div>
      <div className="row">
        <div
          className="col-10 col-md-6 col-lg-4"
          style={{
            margin: "0 auto",
            padding: "30px",
            borderRadius: "13px",
            boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
          }}
        >
          <form>
            {showMessage ? (
              <div class="alert alert-danger" role="alert">
                {showMessage}
              </div>
            ) : null}
            <div class="mb-3">
              <label for="email" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                name="email"
                value={input.email}
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
                value={input.password}
                onChange={(e) => handleOnChange(e)}
              />
            </div>
            <div className="d-flex justify-content-lg-between">
              <button
                type="button"
                class="btn btn-success"
                onClick={(e) => handleOnClick(e)}
              >
                Login
              </button>
              <p
                className="text-decoration-underline align-self-center"
                style={{ color: "#7f8c8d", cursor: "pointer" }}
                onClick={(e) => handleToRegister(e)}
              >
                Don't have an account yet
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
