import React, { memo } from "react";

export const ListaPrecio = memo(({ title, img, precio }) => {
  return (
    <div className="card" style={{ width: '100%', backgroundColor:'#ebeded' }}>
      <h4 className="card-header">{title}</h4>
      <h5 className="card-header">Precio: {precio}</h5>
      <div className="card-body">
        <img src={img} style={{ width: '50%' }}  className="card-img" alt={title} />
      </div>
    </div>
  );
});


export default ListaPrecio;