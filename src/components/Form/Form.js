import React, { Component } from "react";
import Axios from "axios";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracking: "0",
      year: "0"
    };

    this.handleTracking = this.handleTracking.bind(this);
    this.handleYear = this.handleYear.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    Axios.post("serpost", {
      Anio: this.state.year,
      filtro: 0,
      Tracking: this.state.year
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(response) {
        console.log(response);
      })
      .finally(function(response) {});
  }

  handleTracking(event) {
    this.setState({ tracking: event.target.value });
  }

  handleYear(event) {
    this.setState({ year: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Datos de búsqueda</h2>
        <hr />
        <div className="form-group year">
          <label htmlFor="country">Año del envío</label>
          <select
            name="country"
            id="country"
            value={this.state.year}
            onChange={this.handleYear}
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
            value={this.state.tracking}
            onChange={this.handleTracking}
          />
        </div>
        <div className="form-group cta">
          <button id="btn-search">Buscar</button>
        </div>
      </form>
    );
  }
}

export default Form;
