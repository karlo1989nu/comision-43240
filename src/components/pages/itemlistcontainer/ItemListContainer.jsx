import { useState } from "react";


export const ProductsList = () => {
 const [contador, setContador] = useState(0 )
 console.log('El componente fue montado');

  return (
   <>
   <h2>Aquí van los productos</h2>

<button onClick={() => setContador(contador+1)}>Sumar</button>
   {/*<Counter/>*/}
   </>
      
  );
};
