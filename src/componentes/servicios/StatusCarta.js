import React, { memo } from "react";
import { useFetch } from "../Fetch/useFetch";
import { StatusCompra } from "./StatusCompra";

const StatusCarta = memo(() => {
 const url = `http://localhost:5660/api/reserva`;
  const { loading, data } = useFetch(url);
  return (
    <>
      {loading ? (
        <div className="text-center">
        <div className="spinner-border text-primary" style={{ width: "3rem", height: "3rem" }} role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      ) : data.length ? (
        <ul className="list-group list-group-flush">
          <li key="servicios" className="list-group-item">
            <h3>Estatus de la entrega</h3>
          </li>

          {data.map((v) => {

            return (
              <li key={v._id} className="list-group-item">
                <StatusCompra title={v.id_producto.nombre} id={v._id} img={v.id_producto.img} precio={v.precio} cantidad={v.cantidad} />
              </li>
            );
          })}
        </ul>
      ) : (
        <ul className="list-group list-group-flush">
          <li key="servicios" className="list-group-item">
            <h3>No tiene pedidos en espera</h3>
          </li>
        </ul>
      )}
    </>
  );
});

export default StatusCarta;