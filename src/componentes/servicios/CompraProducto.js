import React, { memo, useEffect, useState } from "react";
import Producto from '../servicios/Producto';
import { get } from "../../helpers/fetch";

const PrecioServicio = memo(() => {
  const [data, setData] = useState([]);
 
 useEffect(() => {
  const fetchTypeIdentity = async () => {
    await get('products')
      .then((res) => res.json())
      .then(({payload}) => {
        setData(payload);
      })
      .catch(() => {});
  };

  fetchTypeIdentity();
  // eslint-disable-next-line
}, []);

  return (
    <>
      {data.length ? (
        <ul className="list-group list-group-flush">
          <li key="servicios" className="list-group-item">
            <h3>Comprar producto</h3>
          </li>
          {data.map((v) => {
            const {
              id,
              price,
              name,
               img,
               amount
            } = v;
            return (
              <div key={id} className="list-group-item">
                <Producto
                  id={id}
                  title={name}
                  cantidadPro={amount}
                  img={img}
                  precio={price}
                />
              </div>
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