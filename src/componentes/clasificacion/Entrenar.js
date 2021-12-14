import natural from "natural";
import spanish from "../../../node_modules/natural/lib/natural/stemmers/porter_stemmer_es";

export const Entrenar = () => {
  const classifier = new natural.LogisticRegressionClassifier(spanish);

   classifier.addDocument("encargados estatus pedidos", "status");
   classifier.addDocument("cuantos cuentas los reloj precios precio", "precio-servicios");
   classifier.addDocument("productos disponibles", "precio-servicios");
   classifier.addDocument("información sobre el producto", "servicio");
   classifier.addDocument("comprar", "comprar");
   classifier.addDocument("ubicacion direccion ubicados", "ubicacion");

   
   classifier.addDocument("Salir", "terminar");
   classifier.addDocument("Terminar conversacion", "terminar");
   classifier.addDocument("Nada", "terminar");
   classifier.train();
 

  return classifier;
};

export default Entrenar;