import { ItemsListPresentational } from "./ItemsListPresentational";
import { useState, useEffect } from "react";
import "./itemlistcontainer.css";
import { useParams } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const override = {
  display: "block",
  margin: "0 auto",
};

export const ItemsListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    let itemsCollection = collection(db, "products");
    let consulta;

    if (!categoryName) {
      consulta = itemsCollection;
    } else {
      consulta = query(itemsCollection, where("category", "==", categoryName));
    }
    getDocs(consulta)
      .then((res) => {
        let products = res.docs.map((e) => {
          return {
            ...e.data(),
            id: e.id,
          };
        });
        setItems(products);
      })
      .catch((err) => console.log(err));
  }, [categoryName]);

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
