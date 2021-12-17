import React, { memo,useContext,useEffect,useState} from "react";
import { UserContext } from "../../context/UserContext";
import { get } from "../../helpers/fetch";
import { StatusCompra } from "./StatusCompra";

const StatusCarta = memo(() => {
  const [data, setData] = useState([]);
  const {
    user: { cedula,email,nombre },
  } = useContext(UserContext);

  
 useEffect(() => {
  const fetchTypeIdentity = async () => {
    await get(`reservations/?identificationCard=${cedula}`)
      .then((res) => res.json())
      .then(({payload}) => {
        console.log(`hola ${payload}`);
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
            <h3>Estatus de la entrega</h3>
          </li>

          {data.map((v) => {

            return (
              <div key={v._id} className="list-group-item">
                <StatusCompra title={v.id_producto.nombre} id={v._id} img={v.id_producto.img} precio={v.precio} cantidad={v.cantidad} />
              </div>
            );
          })}
        </ul>
      ) : (
        <ul className="list-group list-group-flush">
          <li key="servicios" className="list-group-item">
            <h3 style={{fontFamily: 'Montserrat'}}>No tiene pedidos en espera</h3>
          </li>
        </ul>
      )}
    </>
  );
});

export default StatusCarta;