import React, { Component } from "react";
import Select from "../Select/Select";
import axios from "axios";

class Form extends Component {
  handleSubmit(event) {
    event.preventDefault();

    axios
      .post(
        "http://clientes.serpost.com.pe/prj_online/Web_Busqueda.aspx/Consultar_Tracking",
        {
          params: {
            Anio: 2019,
            Filtro: 0,
            Tracking: "RB810114551SG"
          },
          data: {
            txtCorreo: "angelokta7@gmail.com",
            txtContra: "gatoflaco10"
          }
        }
      )
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      })
      .finally(function() {
        // always executed
      });

    // const product = {
    //   origen: "SINGAPORE",
    //   estado: "ENTREGADO",
    //   tracking: "RB810114551SG",
    //   destino: "ADMINISTRACION POSTAL JM",
    //   tipoEnvio: "CERTIFICADOS TRADICIONALES",
    //   aviso: "",
    //   observacion: ""
    // };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Datos de búsqueda</h2>
        <hr />
        <div className="form-group year">
          <label htmlFor="country">Año del envío</label>
          <Select />
        </div>
        <div className="form-group tracking">
          <label htmlFor="tracking">Nro de tracking</label>
          <input type="text" className="form-input" />
        </div>
        <div className="form-group cta">
          <button id="btn-search">Buscar</button>
        </div>
      </form>
    );
  }
}

export default Form;
