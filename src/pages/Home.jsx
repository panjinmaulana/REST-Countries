import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Figure from "../components/Figure";

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [input, setInput] = useState("");
  const [searchCountry, setSearchCountry] = useState([]);

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (!location.state || !localStorage.getItem(location.state.email)) {
      history.push("/login");
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

  function handleOnChange(e) {
    setInput(e.target.value);
  }

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
}
