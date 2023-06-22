import { ItemsListPresentational } from "./ItemsListPresentational";
import { useState, useEffect } from "react";
import { products } from "../../../productsMock";

import "./itemlistcontainer.css";

export const ItemsListContainer = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      resolve(products);
    });

    tarea
      .then((respuesta) => {
        setItems(respuesta);
      })
      .catch((rechazo) => {
        setItems(rechazo);
      });
  }, []);
  return (
    <div>
      <ItemsListPresentational items={items} />
    </div>
  );
};
