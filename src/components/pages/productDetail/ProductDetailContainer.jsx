import { useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";
import { products } from "../../../productsMock";
import { Box, Grid } from "@mui/material";

const ProductDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});

  let id = 102;

  useEffect(() => {
    let productFind = products.find((product) => {
      return product.id === id;
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

  console.log(productSelected);

  return (
    <Box>
      <Grid>
        <ProductDetail productSelected={productSelected} />
      </Grid>
    </Box>
  );
};

export default ProductDetailContainer;
