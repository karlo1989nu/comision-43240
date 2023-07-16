import { useContext, useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { PacmanLoader } from "react-spinners";
import Swal from "sweetalert2";

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
    let productFind = products.find((product) => {
      return product.id === +id;
    });
    const getProduct = new Promise((res) => {
      setTimeout(() => {
        res(productFind);
      }, 2000);
    });

    getProduct
      .then((res) => {
        setProductSelected(res);
      })
      .catch((err) => {
        console.log(err);
      });
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
