import React, { memo } from "react";

export const Ubicacion = memo(( ) => {
  return (
    <div style={{width: "100%"}}><iframe style={{width:"100%",height:"600", frameborder:"0" ,scrolling:"no", marginheight:"0", marginwidth:"0" }}  src="https://maps.google.com/maps?q=O´Clock&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe></div>
  );
});


export default Ubicacion;