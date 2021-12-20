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
    await get(`reservations/${cedula}`)
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
            <h3>Reservaciones en proceso</h3>
          </li>

          {data.map((v) => {

            return (
              <div key={v.id} className="list-group-item">
                <StatusCompra title={v.product.name} id={v.id} img={v.product.img} precio={v.price} cantidad={v.amount} />
              </div>
            );
          })}
        </ul>
      ) : (
        <ul className="list-group list-group-flush">
          <li key="servicios" className="list-group-item">
            <h3 style={{fontFamily: 'Montserrat'}}>No tiene reservaciones en espera</h3>
          </li>
        </ul>
      )}
    </>
  );
});

export default StatusCarta;