import { useContext, useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { PacmanLoader } from "react-spinners";
import Swal from "sweetalert2";
import { db } from "../../../firebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";

const override = {
  display: "block",
  margin: "0 auto",
};

const ProductDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});

  const { agregarAlCarrito, getTotalQuantityById } = useContext(CartContext);

  const { id } = useParams();

  const cantidad = getTotalQuantityById(+id);

  const onAdd = (cantidad) => {
    let data = { ...productSelected, quantity: cantidad };

    agregarAlCarrito(data);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your ittem has been added",
      showConfirmButton: true,
      timer: 1500,
    });
  };

  useEffect(() => {
    let itemCollection = collection(db, "products");
    let refDoc = doc(itemCollection, id);
    getDoc(refDoc)
      .then((res) => {
        setProductSelected({ id: res.id, ...res.data() });
      })
      .catch();
  }, [id]);

  return (
    <div>
      {productSelected.price ? (
        <ProductDetail
          productSelected={productSelected}
          agregarAlCarrito={agregarAlCarrito}
          cantidad={cantidad}
          onAdd={onAdd}
        />
      ) : (
        <PacmanLoader color="#17594A" size={100} cssOverride={override} />
      )}
    </div>
  );
};

export default ProductDetailContainer;
