import React, { memo } from "react";
import { useFetch } from "../Fetch/useFetch";
import { ListaPrecio } from "../servicios/ListaPrecio";

const PrecioServicio = memo(() => {
  const url = `http://localhost:5660/api/producto`;
 const { loading, data } = useFetch(url);
  console.log(data);
  return (
    <>
      {loading ? (
        <div className="text-center">
        <div
          className="spinner-border text-primary"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      ) : data.length ? (
        <ul className="list-group list-group-flush">
            <h3>Precio de los servicio</h3>
          {data.map((v) => {
            const {
              cantidad,
              id,
              precio,
              nombre,
              img,
            } = v;
            return (
              <li key={id} className="list-group-item">
                <ListaPrecio
                  title={nombre}
                  cantidad={cantidad}
                  img={img}
                  precio={precio}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <ul className="list-group list-group-flush">
          <li key="servicios" className="list-group-item">
            <h3>No hay servicios disponibles</h3>
          </li>
        </ul>
      )}
    </>
  );
});

export default PrecioServicio;