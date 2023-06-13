import { ItemsListPresentational } from "./ItemsListPresentational";
import { useState, useEffect } from "react";
import { products } from "../../../productsMock";

export const ItemsListContainer = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 3000);

      //reject("La promesa no se resuelve");
    });

    tarea
      .then((respuesta) => {
        setItems(respuesta);
      })
      .catch((rechazo) => {
        setItems(rechazo);
      });
    /*tarea
      .then((res) => {
        setItems(res);
      })
      .catch((err) => {
        setItems(err);
      });*/

    /*const getData = async () => {
      try {
        let res = await tarea;
        setItems(res);
      } catch (error) {
        console.log(error);
      }
    }
    getData();*/
  }, []);
  return <ItemsListPresentational items={items} />;
};
