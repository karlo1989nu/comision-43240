import { useState } from "react";

export const useCount = (initial, stock, min = 0) => {
  const [count, setCount] = useState(0);
  const decrement = () => {
    if (count > min) {
      setCount(count - 1);
    }
  };
  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const reset = () => {
    setCount(initial);
  };
  return { decrement, increment, reset, count };
};
