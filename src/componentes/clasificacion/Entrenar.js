import natural from "natural";
import spanish from "../../../node_modules/natural/lib/natural/stemmers/porter_stemmer_es";

export const Entrenar = () => {
  const classifier = new natural.LogisticRegressionClassifier(spanish);


  classifier.addDocument("ver ventas", "comprar");
  classifier.addDocument("comprar", "comprar");
  classifier.addDocument("que vendes", "comprar");
  classifier.addDocument("digame sus existencias", "precio-servicios");


   classifier.addDocument("ver productos disponibles", "precio-servicios");
   classifier.addDocument("productos", "precio-servicios");
   classifier.addDocument("cuales productos tienes", "precio-servicios");


   classifier.addDocument("ver reservaciones", "reservaciones");
   classifier.addDocument("mis reservaciones", "reservaciones");
   classifier.addDocument("mis pedidos", "reservaciones");
   
   classifier.addDocument("Salir", "terminar");
   classifier.addDocument("Terminar conversacion", "terminar");
   classifier.train();
 

  return classifier;
};

export default Entrenar;