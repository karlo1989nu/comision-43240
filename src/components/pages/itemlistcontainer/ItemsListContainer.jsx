import { ItemsListPresentational } from "./ItemsListPresentational";
import { useState, useEffect } from "react";
import { products } from "../../../productsMock";
import "./itemlistcontainer.css";
import { useParams } from "react-router-dom";
import { PacmanLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
};

export const ItemsListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();
  useEffect(() => {
    let prodFilt = products.filter((e) => e.category === categoryName);

    const tarea = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(categoryName ? prodFilt : products);
      }, 2000);
    });

    tarea
      .then((respuesta) => {
        setItems(respuesta);
      })
      .catch((rechazo) => {
        setItems(rechazo);
      });
  }, [categoryName]);

  // if (items.length === 0) {
  //   return <h1>Cargando...</h1>;
  // }

  return (
    <div>
      {items.length > 0 ? (
        <ItemsListPresentational items={items} />
      ) : (
        <PacmanLoader color="#17594A" size={100} cssOverride={override} />
      )}
    </div>
  );
};
