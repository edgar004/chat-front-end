import Entrenar from "./Entrenar";

export const Clasificacion = (user) => {
  const classifier = Entrenar();
  if (classifier.getClassifications(user)[0].value === 0.5) {
    return "no-entiendo";
  }

  return classifier.classify(user);
};

export default Clasificacion;