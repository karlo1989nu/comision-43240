import { Button } from "@mui/material";

export const Counter = ({ contador, setContador }) => {
  return (
    <div>
      <h2>{contador}</h2>
      <Button
        variant="contained"
        size="small"
        onClick={() => setContador(contador + 1)}
      >
        +1
      </Button>
      <Button
        variant="contained"
        size="small"
        onClick={() => setContador(contador - 1)}
      >
        -1
      </Button>
    </div>
  );
};
