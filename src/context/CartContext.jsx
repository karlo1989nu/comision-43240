import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const agregarAlCarrito = (newProduct) => {
    setCart([...cart, newProduct]);
  };
  let data = { cart, agregarAlCarrito };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
