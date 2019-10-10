import React, { Component } from "react";

class SearchResults extends Component {
  render() {
    return (
      <div className="search-results">
        <h2>Resultados de búsqueda</h2>
        <hr />
        <div className="item">
          <p className="item__feature">Origen</p>
          <input type="text" className="item__description" value="" readOnly />
        </div>
        <div className="item">
          <p className="item__feature">Estado del Envío</p>
          <input type="text" className="item__description" value="" readOnly />
        </div>
        <div className="item">
          <p className="item__feature">Nro Tracking</p>
          <input type="text" className="item__description" value="" readOnly />
        </div>
        <div className="item">
          <p className="item__feature">Destino</p>
          <input type="text" className="item__description" value="" readOnly />
        </div>
        <div className="item">
          <p className="item__feature">Tipo de Envío</p>
          <input type="text" className="item__description" value="" readOnly />
        </div>
        <div className="item">
          <p className="item__feature">Nro de Aviso</p>
          <input type="text" className="item__description" value="" readOnly />
        </div>
        <div className="item">
          <p className="item__feature">Observación</p>
          <input type="text" className="item__description" value="" readOnly />
        </div>
      </div>
    );
  }
}

export default SearchResults;
