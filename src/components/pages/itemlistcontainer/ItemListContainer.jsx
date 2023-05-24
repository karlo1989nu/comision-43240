import { Counter } from "../../common/counter/Counter";

export const ProductsList = ({ nombre, edad }) => {
  return (
    <>
      <h2>Hola, mi nombre es {nombre}</h2>
      <h2>Y mi edad es {edad}</h2>
      <Counter />
    </>
  );
};
