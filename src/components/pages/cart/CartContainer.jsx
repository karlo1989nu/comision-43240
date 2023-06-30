const CartContainer = () => {
  const compraRealizada = () => {
    console.log("Compra exitosa. Gracias por su compra");
  };

  return (
    <div>
      <button onClick={compraRealizada()}>Comprar</button>
    </div>
  );
};

export default CartContainer;
