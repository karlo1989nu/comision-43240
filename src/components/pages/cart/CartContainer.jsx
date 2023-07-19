import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const { cart, clearCart, removeById, getTotalPrice } =
    useContext(CartContext);

  const limpiarCarrito = () => {
    Swal.fire({
      title: "Do you want to clear the cart?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Cart empty!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  let totalPrice = getTotalPrice();

  return (
    <div>
      <h2>The total price is: {totalPrice}</h2>
      {cart.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <h3>{product.price}</h3>
            <h3>{product.quantity}</h3>
            <Button
              variant="contained"
              size="small"
              onClick={() => removeById(product.id)}
            >
              Eliminar
            </Button>
          </div>
        );
      })}
      {cart.length > 0 && (
        <>
          <Button variant="contained" size="small" onClick={limpiarCarrito}>
            Limpiar carrito
          </Button>
          <Link to="checkout">
            <Button variant="contained" size="small">
              Finalizar compra
            </Button>
          </Link>
        </>
      )}
    </div>
  );
};

export default CartContainer;
