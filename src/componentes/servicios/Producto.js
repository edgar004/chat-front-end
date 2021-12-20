import React, { memo, useState,useContext} from "react";
import swal from 'sweetalert';
import { UserContext } from "../../context/UserContext";
import { post } from "../../helpers/fetch";


export const Producto = memo(({id, title, img, precio,cantidadPro }) => {
  const {
    user: { cedula,email,nombre },
  } = useContext(UserContext);

  const [cantidad,setCantidad]=useState(0)
  const [cantidaDisponible,setCantidadDisponible]=useState(cantidadPro)


const  Compra = async (params) => {
  if(cantidad>cantidadPro){
    swal(`La cantidad disponible son:${cantidadPro}`, "Ha superado el límite en stock.", "warning");
    return;
  }
  const resp = await post('reservations', {
        name:nombre,
        identificationCard:cedula,
        email:email,
        idProduct :id,
        amount : cantidad,
        price:precio,
});

swal("Compra realizada con existo", "La factura se le envio por correo", "success");
setCantidad(0)
setCantidadDisponible(cantidaDisponible-cantidad)
}

 const  handleChange = (event) => {
   setCantidad(event.target.value);
}



  return (

    <div className="card" style={{ width: '100%', backgroundColor:'#458697', borderRadius: '15px', padding:'5px', margin:'5px'}}>
    <h1 style={{ fontSize: '18px', textAlign:'center', marginTop:'5px', marginLeft:'5px', paddingTop: '15px' , fontFamily: 'Montserrat', color:'#FFFFFF'}}>{title}</h1>
    <h5 style={{ margin: '-9px',textAlign:'center', color:'#FFFFFF'}}>Precio: {precio} $</h5>
    <h5 style={{ textAlign:'center',color:'#FFFFFF'}}>Cantidad: {cantidaDisponible}</h5>

    <div className="card-body">
      <img src={img} style={{ width: '50%',  margin:'auto', border: '5px #FFFFFF', display:'flex'}} alt={title} />
    </div>

    {cantidaDisponible>0 ? ( <div style={{ textAlign:'center',color:'#FFFFFF', margin:'10px'}}> Cantidad: <input value={cantidad} min="1" max={cantidaDisponible} onChange={handleChange} type="number"></input>
      <button style={{ width: '100%', backgroundColor:'#EF6C00', boxShadow: '5px 4px'}} variant="warning" onClick={Compra} >Comprar</button>
    </div>) : 
      <button style={{ width: '100%', backgroundColor:'#f2d024', boxShadow: '5px 4px'}} variant="warning" >NO DISPONIBLE</button>
  }
    </div>
     

  );
});
export default Producto;