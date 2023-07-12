import { Grid, Button, Box } from "@mui/material";
//import { useState } from "react";
import { useCount } from "../../hooks/UseCount";

export const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const { decrement, increment, reset, count } = useCount(initial, stock);
  return (
    <Grid container marginLeft={"40px"} direction={"row"}>
      <Button variant="contained" size="small" onClick={increment}>
        +
      </Button>
      <Box>{count}</Box>
      <Button variant="contained" size="small" onClick={decrement}>
        -
      </Button>
      <Button onClick={reset} variant="contained" size="small">
        Reset
      </Button>
      <Button onClick={() => onAdd(count)} variant="contained" size="small">
        Add
      </Button>
    </Grid>
  );
};
