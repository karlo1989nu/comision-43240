import { products } from "./productsMock";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "./firebaseConfig";

const AgregarDocs = () => {
  const rellenar = () => {
    let itemsCollection = collection(db, "products");
    products.forEach((e) => {
      addDoc(itemsCollection, e);
    });
  };

  return <button onClick={rellenar}>Agregar productos</button>;
};

export default AgregarDocs;
