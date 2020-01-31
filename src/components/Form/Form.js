import React, { useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";

export default function Form(props) {
  let today = new Date();
  let currentYear = today.getFullYear();

  const [tracking, setTracking] = useState("");
  const [register, setRegister] = useState({
    isRegistered: false
  });
  const [year, setYear] = useState(currentYear.toString());
  const [data, setData] = useState({
    origin: "",
    status: "",
    tracking: "",
    destiny: "",
    type: "",
    notice: "",
    notes: "",
    detail: []
  });

  const handleSubmit = evt => {
    evt.preventDefault();

    Axios.post(
      "https://serpostapi20191121050851.azurewebsites.net/api/serpost",
      {
        Anio: year,
        Filtro: 0,
        Tracking: tracking
      }
    )
      .then(function(response) {
        setData({
          origin: response.data.origen,
          status: response.data.estadoEnvio,
          tracking: response.data.nroTracking,
          destiny: response.data.destino,
          type: response.data.tipoEnvio,
          notice: "",
          notes: response.data.observacion,
          detail: response.data.detalle
        });

        Swal.fire({
          title: "Encontrado!",
          text: "Aquí esta la info de tu paquete",
          icon: "success",
          confirmButtonText: "Ok"
        });

        let hasDetail = response.data.detalle.length;
        if (hasDetail) {
          setRegister({
            isRegistered: true
          });
        }
      })
      .catch(function(error) {
        console.log(error.response);

        Swal.fire({
          title: "Error!",
          text: "Aun no tenemos data de tu paquete",
          icon: "error",
          confirmButtonText: "Ok"
        });
      });
  };

  return (
    <div>
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
            <option value="2020" defaultValue>
              2020
            </option>
            <option value="2019">2019</option>
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
            required
          />
        </div>
        <div className="form-group cta">
          <button id="btn-search">Buscar</button>
        </div>
      </form>

      <div className="search-results">
        <h2>Resultados de búsqueda</h2>
        <hr />
        <div className="item">
          <p className="item__feature">
            <i className="icon icon-origen"></i>Origen
          </p>
          <textarea value={data.origin} readOnly rows="1" />
        </div>
        <div className="item">
          <p className="item__feature">
            <i className="icon icon-estado"></i>Estado del Envío
          </p>
          <textarea value={data.status} readOnly rows="1" />
        </div>
        <div className="item">
          <p className="item__feature">
            <i className="icon icon-tracking"></i>Nro Tracking
          </p>
          <textarea value={data.tracking} readOnly rows="1" />
        </div>
        <div className="item">
          <p className="item__feature">
            <i className="icon icon-destino"></i>Destino
          </p>
          <textarea value={data.destiny} readOnly rows="1" />
        </div>
        <div className="item">
          <p className="item__feature">
            <i className="icon icon-tipo"></i>Tipo de Envío
          </p>
          <textarea value={data.type} readOnly rows="1" />
        </div>
        <div className="item">
          <p className="item__feature">
            <i className="icon icon-aviso"></i>Nro de Aviso
          </p>
          <textarea value={data.notice} readOnly rows="1" />
        </div>
        <div className="item">
          <p className="item__feature">
            <i className="icon icon-observacion"></i>Observación
          </p>
          <textarea value={data.observacion} readOnly rows="2" />
        </div>
      </div>

      <div className="history">
        <h2>Historial</h2>
        <hr />
        {data.detail.map(detail => (
          <div>
            <div className="history__date">
              <p>
                <i className="icon icon-check"></i>
                {detail.fecha}
              </p>
            </div>
            <div className="history__description">
              <textarea value={detail.descripcion} readOnly />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
