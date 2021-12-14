import React, { memo } from "react";
import { useFetch } from "../Fetch/useFetch";
import Producto from '../servicios/Producto';

const PrecioServicio = memo(() => {
  const url = `http://localhost:5660/api/producto`;
 const { loading, data } = useFetch(url);
 
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
          <li key="servicios" className="list-group-item">
            <h3>Comprar producto</h3>
          </li>
          {data.map((v) => {
            const {
              precio,
              nombre,
               img,
               cantidad
            } = v;
            return (
              <li key={v._id} className="list-group-item">
                <Producto
                  id={v._id}
                  title={nombre}
                  cantidadPro={cantidad}
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