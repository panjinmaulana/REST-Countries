import React from "react";

export default function Figure({ country }) {
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
          <h5 className="text-center mt-2" style={{ fontWeight: "bold" }}>
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
}
