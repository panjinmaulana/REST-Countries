import React, { useState, useEffect } from "react";

import Login from "./Login";
import Figure from "../components/Figure";
import Alert from "../components/Alert";

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [input, setInput] = useState("");
  const [searchCountry, setSearchCountry] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

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
        setLoading(true);
        setSearchCountry(data.slice(0, 8));
      })
      .catch((err) => console.log(err));
  }, [input]);

  setTimeout(() => {
    localStorage.removeItem("isLogin");
    setIsLogin(false);
  }, 15000);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  function handleOnChange(e) {
    setInput(e.target.value);
  }

  if (isLogin) {
    return (
      <div className="container mt-3">
        <div className="row">
          <div
            className="col d-flex justify-content-end"
            style={{ marginLeft: "-31px" }}
          >
            <input type="text" onChange={(e) => handleOnChange(e)} />
          </div>
        </div>
        <div className="row mt-3">
          {loading ? (
            <Alert />
          ) : input && searchCountry.length ? (
            loading ? (
              <Alert />
            ) : (
              searchCountry.map((country) => {
                return <Figure country={country} />;
              })
            )
          ) : (
            countries.map((country) => {
              return <Figure country={country} />;
            })
          )}
        </div>
      </div>
    );
  } else {
    return <Login setIsLogin={setIsLogin} />;
  }
}
