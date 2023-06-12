import { useEffect, useState } from "react";
import { ItemsListPresentational } from "./ItemsListPresentational";
export const ItemsListContainer = ({ nombre }) => {
  const [contador, setContador] = useState(0);
  console.log("El componente se actualiza");

  useEffect(() => {
    console.log("API request");
  }, [nombre]);
  console.log("abajo");
  return (
    <ItemsListPresentational contador={contador} setContador={setContador} />
  );
};
