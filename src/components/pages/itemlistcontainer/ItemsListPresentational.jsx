export const ItemsListPresentational = ({ contador, setContador }) => {
  return (
    <>
      <h2>Aquí van los productos</h2>

      <button onClick={() => setContador(contador + 1)}>Sumar</button>
      {/*<Counter/>*/}
    </>
  );
};
