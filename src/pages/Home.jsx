import React, { useState, useEffect } from "react";

import Login from "./Login";
import Figure from "../components/Figure";

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [input, setInput] = useState("");
  const [searchCountry, setSearchCountry] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showUserPage, setShowUserPage] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isLogin")) {
      setIsLogin(true);
    }

    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data.slice(0, 8));
      })
      .catch((err) => console.log(err));

    fetch(`https://restcountries.com/v3.1/name/${input}`)
      .then((res) => res.json())
      .then((data) => {
        setSearchCountry(data.slice(0, 8));
      })
      .catch((err) => console.log(err));
  }, [input]);

  //   setTimeout(() => {
  //     localStorage.removeItem("isLogin");
  //     setIsLogin(false);
  //   }, 15000);

  function handleOnChange(e) {
    setInput(e.target.value);
  }

  if (isLogin) {
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col d-flex justify-content-between">
            {isAdmin ? (
              <button className="btn btn-primary">Primary</button>
            ) : null}
            <input type="text" onChange={(e) => handleOnChange(e)} />
          </div>
        </div>
        <div className="row mt-3">
          {input && searchCountry.length
            ? searchCountry.map((country) => {
                return <Figure country={country} />;
              })
            : countries.map((country) => {
                return <Figure country={country} />;
              })}
        </div>
        <div className="row mt-1">
          <div className="col d-flex justify-content-center">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#">
                    Previous
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  } else {
    return <Login setIsLogin={setIsLogin} />;
  }
}
