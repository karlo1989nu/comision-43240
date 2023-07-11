import { useContext, useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";
import { products } from "../../../productsMock";
import { Box, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const ProductDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});

  const { agregarAlCarrito } = useContext(CartContext);

  const { id } = useParams();

  useEffect(() => {
    let productFind = products.find((product) => {
      return product.id === +id;
    });
    const getProduct = new Promise((res, rej) => {
      res(productFind);
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
    <Box>
      <Grid>
        <ProductDetail
          productSelected={productSelected}
          agregarAlCarrito={agregarAlCarrito}
        />
      </Grid>
    </Box>
  );
};

export default ProductDetailContainer;
