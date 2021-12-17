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
    <div className="card" style={{ width: '100%', backgroundColor:'#458697', borderRadius: '15px', padding:'8px', margin:'5px'}}>
      <h4 style={{ fontSize: '18px', textAlign:'center', marginTop:'5px', marginLeft:'5px', paddingTop: '15px' , fontFamily: 'Montserrat', color:'#FFFFFF'}} className="card-header">{title}</h4>
      <h5 style={{ margin: '-9px',textAlign:'center', color:'#FFFFFF'}}>Precio: {precio} $</h5>
      <h5 style={{ textAlign:'center',color:'#FFFFFF'}}>Cantidad: {cantidad}</h5>
      <div className="card-body">
        <img src={img} style={{ width: '50%',  margin:'auto', border: '5px #FFFFFF', display:'flex'}}  className="card-img" alt={title} />
      </div>
      <button style={{ width: '99%', backgroundColor:'#f2d024', boxShadow: '5px 4px'}} variant="warning" onClick={cancelar}  >Cancelar</button>
      
    </div>
  );
});

export default StatusCompra;
