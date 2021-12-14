import React, { memo } from "react";
import swal from 'sweetalert'


export const StatusCompra =  memo(({ title, img,cantidad,precio,id }) => {

  
const  cancelar = async (params) => {
  const value = await swal("¿Esta seguro que desea cancelar la reserva?", { buttons: true });
  if(!value) return

  const url = `http://localhost:5660/api/reserva`;
  const resp = await fetch(url, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        id,
    })
});

}

  
  return (
    <div className="card" style={{ width: '100%', backgroundColor:'#ebeded', borderRadius: '15px' }}>
      <h4 style={{ marginTop:'20px', paddingTop:'14px' }} className="card-header">{title}</h4>
      <h5 className="card-header">Precio: {precio}</h5>
      <h5 className="card-header">Cantidad: {cantidad}</h5>
      <div className="card-body">
        <img src={img} style={{ width: '50%', paddingBottom:'15px'  }}  className="card-img" alt={title} />
      </div>
      <button style={{ width: '50%', backgroundColor:'#f2d024' }} variant="warning" onClick={cancelar}  >Cancelar</button>
      
    </div>
  );
});

export default StatusCompra;
