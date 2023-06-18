import { Grid, Typography } from "@mui/material";
import { Navbar } from "./components/layout/navbar/Navbar";
import { ItemsListContainer } from "./components/pages/itemlistcontainer/ItemsListContainer";
//import FetchingDeDatosContainerfrom "./components/pages/fetchingDeDatos/FetchingDeDatosContainer";
import ProductDetailContainer from "./components/pages/productDetail/ProductDetailContainer";
import Fetching from "./components/pages/fetching/Fetching";

const App = () => {
  return (
    <>
      <Typography variant="h2" color="primary">
        Hola
      </Typography>
      <Fetching />
    </>
    /*<>
      <FetchingDeDatosContainer />
  </>*/
    /*<Grid container direction={"column"} spacing={1}>
      <Grid item>
        <nav style={{ margin: "30px" }}>
          <Navbar />
        </nav>
      </Grid>
      <Grid container spacing={2} margin={"20px"}>
        <ItemsListContainer />
      </Grid>
      {/*<ProductDetailContainer />
    </Grid>*/
  );
};

export default App;
