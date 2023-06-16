// import { Grid } from "@mui/material";
// import { Navbar } from "./components/layout/navbar/Navbar";
// import { ItemsListContainer } from "./components/pages/itemlistcontainer/ItemsListContainer";

// import FetchingDeDatosContainer from "./components/pages/fetchingDeDatos/FetchingDeDatosContainer";
import ProductDetailContainer from "./components/pages/productDetail/ProductDetailContainer";

const App = () => {
  return (
    /*<>
      <FetchingDeDatosContainer />
  </>*/
    /*<Grid container direction={"column"} spacing={1}>
      <Grid item>
        <nav style={{ margin: "30px" }}>
          -<Navbar />
        </nav>
      </Grid>
      <Grid container spacing={2} margin={"20px"}>
        <ItemsListContainer />
      </Grid>
      <ProductDetailContainer />
    </Grid>*/
    <ProductDetailContainer />
  );
};

export default App;
