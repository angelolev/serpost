import React from "react";
import "./styles.scss";
import logo from "./images/logo.svg";

function App() {
  return (
    <div className="App">
      <header>
        <nav className="nav">
          {/* <div className="nav__icon">
            <i className="icon icon-menu"></i>
          </div> */}
          <div className="nav__logo">
            <img src={logo} alt="" />
          </div>
          <div className="nav__title">
            <p>Serpost</p>
          </div>
        </nav>
        <div className="colorMode">
          <i className="icon icon-moon">
            {" "}
            <span>Color Mode</span>
          </i>
        </div>
      </header>
      <div className="content">
        <form>
          <h2>Datos de búsqueda</h2>
          <hr />
          <div className="form-group year">
            <label htmlFor="country">Año del envío</label>
            <select name="country" id="country">
              <option value="" selected>
                2019
              </option>
              <option value="">2018</option>
              <option value="">2017</option>
              <option value="">2016</option>
              <option value="">2015</option>
              <option value="">2014</option>
              <option value="">2013</option>
            </select>
          </div>
          <div className="form-group tracking">
            <label htmlFor="tracking">Nro de tracking</label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-group cta">
            <button id="btn-search">Buscar</button>
          </div>
        </form>
        <div className="search-results">
          <h2>Resultados de búsqueda</h2>
          <hr />
          <div className="item">
            <p className="item__feature">Origen</p>
            <input
              type="text"
              className="item__description"
              value=""
              readOnly
            />
          </div>
          <div className="item">
            <p className="item__feature">Estado del Envío</p>
            <input
              type="text"
              className="item__description"
              value=""
              readOnly
            />
          </div>
          <div className="item">
            <p className="item__feature">Nro Tracking</p>
            <input
              type="text"
              className="item__description"
              value=""
              readOnly
            />
          </div>
          <div className="item">
            <p className="item__feature">Destino</p>
            <input
              type="text"
              className="item__description"
              value=""
              readOnly
            />
          </div>
          <div className="item">
            <p className="item__feature">Tipo de Envío</p>
            <input
              type="text"
              className="item__description"
              value=""
              readOnly
            />
          </div>
          <div className="item">
            <p className="item__feature">Nro de Aviso</p>
            <input
              type="text"
              className="item__description"
              value=""
              readOnly
            />
          </div>
          <div className="item">
            <p className="item__feature">Observación</p>
            <input
              type="text"
              className="item__description"
              value=""
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
