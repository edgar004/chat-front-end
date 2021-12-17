import React, { memo } from "react";

export const ListaPrecio = memo(({ title, img, precio }) => {
  return (
    <div className="card" style={{ width: '100%', backgroundColor:'#458697', borderRadius: '15px', padding:'5px', margin:'5px'}}>
      <h4 style={{ fontSize: '18px', textAlign:'center', marginTop:'5px', marginLeft:'5px', paddingTop: '15px' , fontFamily: 'Montserrat', color:'#FFFFFF'}}>{title}</h4>
      <h5 style={{ textAlign:'center', color:'#FFFFFF'}}>Precio: {precio}</h5>
      <div className="card-body">
        <img src={img} style={{ width: '50%',  margin:'auto', border: '5px #FFFFFF', display:'flex', paddingBottom:'12px'}}   className="card-img" alt={title} />
      </div>
    </div>
  );
});


export default ListaPrecio;