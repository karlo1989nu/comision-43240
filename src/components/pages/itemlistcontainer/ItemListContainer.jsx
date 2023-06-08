import { useEffect, useState } from "react";

export const ProductsList = ({ nombre }) => {
  const [contador, setContador] = useState(0);
  console.log("El componente se actualiza");

  useEffect(() => {
    console.log("API request");
  }, [nombre]);
  console.log("abajo");

  return (
    <>
      <h2>Aquí van los productos</h2>

      <button onClick={() => setContador(contador + 1)}>Sumar</button>
      {/*<Counter/>*/}
    </>
  );
};
