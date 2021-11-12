import React, { useState } from "react";

export default function Register({ setShowRegister }) {
  const [input, setInput] = useState({ email: "", password: "" });

  function handleOnChange(e) {
    const { name, value } = e.target;

    setInput({ ...input, [name]: value });
  }

  function handleOnClick(e) {
    e.preventDefault();

    if (input.email && input.password) {
      localStorage.setItem("email", input.email);
      localStorage.setItem("password", input.password);

      setShowRegister(false);
    } else {
      console.log("Field email & password is required.");
    }
  }

  function handleCancel(e) {
    e.preventDefault();
    setShowRegister(false);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="text-center my-3">Register</h1>
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
            <div className="d-flex justify-content-end">
              <button
                type="button"
                class="btn btn-danger me-2"
                onClick={(e) => handleCancel(e)}
              >
                Cancel
              </button>
              <button
                type="button"
                class="btn btn-success"
                onClick={(e) => handleOnClick(e)}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
