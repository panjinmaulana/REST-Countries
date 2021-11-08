import React, { useState, useEffect } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  const [input, setInput] = useState("");
  const [searchCountry, setSearchCountry] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data.slice(0, 8));
      })
      .catch((err) => console.log(err));

    fetch(`https://restcountries.com/v3.1/name/${input}`)
      .then((res) => res.json())
      .then((data) => {
        setSearchCountry(data);
      })
      .catch((err) => console.log(err));
  }, [input]);

  function handleOnChange(e) {
    setInput(e.target.value);
  }

  //   console.log(searchCountry);

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
              return (
                <div className="col-md-3 d-flex justify-content-center">
                  <figure
                    class="figure rounded"
                    style={{
                      boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
                    }}
                  >
                    <img
                      src={country.flags.svg}
                      class="figure-img img-fluid rounded-top"
                      alt={country.name.official}
                      style={{
                        width: "200px",
                        height: "100px",
                        objectFit: "cover",
                      }}
                    />
                    <figcaption class="figure-caption">
                      <h5
                        className="text-center mt-2"
                        style={{ fontWeight: "bold" }}
                      >
                        {country.name.common}
                      </h5>
                      <p className="ps-3">
                        Population: {country.population} <br />
                        Capital: {country.capital && country.capital[0]} <br />
                        Region: {country.region}
                      </p>
                    </figcaption>
                  </figure>
                </div>
              );
            })
          : countries.map((country) => {
              return (
                <div className="col-md-3 d-flex justify-content-center">
                  <figure
                    class="figure rounded"
                    style={{
                      boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
                    }}
                  >
                    <img
                      src={country.flags.svg}
                      class="figure-img img-fluid rounded-top"
                      alt={country.name.official}
                      style={{
                        width: "200px",
                        height: "100px",
                        objectFit: "cover",
                      }}
                    />
                    <figcaption class="figure-caption">
                      <h5
                        className="text-center mt-2"
                        style={{ fontWeight: "bold" }}
                      >
                        {country.name.common}
                      </h5>
                      <p className="ps-3">
                        Population: {country.population} <br />
                        Capital: {country.capital[0]} <br />
                        Region: {country.region}
                      </p>
                    </figcaption>
                  </figure>
                </div>
              );
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

export default App;
