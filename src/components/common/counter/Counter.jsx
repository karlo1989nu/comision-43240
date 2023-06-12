export const Counter = ({ contador, setContador }) => {
  return (
    <div>
      <h2>{contador}</h2>
      <button onClick={() => setContador(contador + 1)}>+1</button>
      <button onClick={() => setContador(contador - 1)}>-1</button>
    </div>
  );
};
