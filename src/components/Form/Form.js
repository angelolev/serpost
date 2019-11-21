import React, { useState } from "react";
import Axios from "axios";

export function Form(props) {
  let today = new Date();
  let currentYear = today.getFullYear();

  const [tracking, setTracking] = useState("");
  const [year, setYear] = useState(currentYear.toString());

  const handleSubmit = evt => {
    evt.preventDefault();

    Axios.post("serpost", {
      Anio: year,
      Filtro: 0,
      Tracking: tracking
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(response) {
        console.log(response);
      })
      .finally(function(response) {});
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Datos de búsqueda</h2>
      <hr />
      <div className="form-group year">
        <label htmlFor="country">Año del envío</label>
        <select
          name="country"
          id="country"
          value={year}
          onChange={e => setYear(e.target.value)}
        >
          <option value="2019" defaultValue>
            2019
          </option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
        </select>
      </div>
      <div className="form-group tracking">
        <label htmlFor="tracking">Nro de tracking</label>
        <input
          type="text"
          className="form-input"
          value={tracking}
          onChange={e => setTracking(e.target.value)}
        />
      </div>
      <div className="form-group cta">
        <button id="btn-search">Buscar</button>
      </div>
    </form>
  );
}

export default Form;
