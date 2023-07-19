import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const agregarAlCarrito = (newProduct) => {
    let exist = isInCart(newProduct.id);
    if (exist) {
      let newArray = cart.map((product) => {
        if (product.id === newProduct.id) {
          return {
            ...product,
            quantity: newProduct.quantity,
          };
        } else {
          return product;
        }
      });
      setCart(newArray);
      localStorage.setItem("cart", JSON.stringify(newArray));
    } else {
      setCart([...cart, newProduct]);
      localStorage.setItem("cart", JSON.stringify([...cart, newProduct]));
    }
  };

  const isInCart = (id) => {
    let exist = cart.some((prod) => prod.id === id);
    return exist;
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const getTotalQuantityById = (id) => {
    let producto = cart.find((prod) => prod.id === id);
    return producto?.quantity;
  };

  const removeById = (id) => {
    let newArray = cart.filter((product) => product.id !== id);
    setCart(newArray);
    localStorage.setItem("cart", JSON.stringify(newArray));
  };

  const getTotalItems = () => {
    let total = cart.reduce((acc, e) => {
      return acc + e.quantity;
    }, 0);
    return total;
  };

  const getTotalPrice = () => {
    let total = cart.reduce((acc, e) => {
      return acc + e.price * e.quantity;
    }, 0);
    return total;
  };

  let data = {
    cart,
    agregarAlCarrito,
    clearCart,
    removeById,
    getTotalQuantityById,
    getTotalItems,
    getTotalPrice,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
