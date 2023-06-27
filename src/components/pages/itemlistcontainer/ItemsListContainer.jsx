import { ItemsListPresentational } from "./ItemsListPresentational";
import { useState, useEffect } from "react";
import { products } from "../../../productsMock";
import "./itemlistcontainer.css";
import { useParams } from "react-router-dom";

export const ItemsListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();
  useEffect(() => {
    let prodFilt = products.filter((e) => e.category === categoryName);

    const tarea = new Promise((resolve, reject) => {
      resolve(categoryName ? prodFilt : products);
    });

    tarea
      .then((respuesta) => {
        setItems(respuesta);
      })
      .catch((rechazo) => {
        setItems(rechazo);
      });
  }, [categoryName]);
  return (
    <div>
      <ItemsListPresentational items={items} />
    </div>
  );
};
