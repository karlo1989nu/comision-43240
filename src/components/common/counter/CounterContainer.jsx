import { useState } from "react";
import { Counter } from "./Counter";

const CounterContainer = () => {
  const [contador, setContador] = useState(0);
  return <Counter contador={contador} setContador={setContador} />;
};

export default CounterContainer;
