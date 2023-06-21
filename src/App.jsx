// import { Box, Grid, Typography } from "@mui/material";
import { LayOut } from "./components/layout/LayOut";
import Footer from "./components/layout/footer/Footer";

import { ItemsListContainer } from "./components/pages/itemlistcontainer/ItemsListContainer";
// import FetchingDeDatosContainerfrom "./components/pages/fetchingDeDatos/FetchingDeDatosContainer";
import ProductDetailContainer from "./components/pages/productDetail/ProductDetailContainer";
// import Fetching from "./components/pages/fetching/Fetching";
// import { ItemCount } from "./components/common/counter/ItemCount";
// import Users from "./components/Users";
// import { Posts } from "./components/Posts";
// import { Comments } from "./components/Comments";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayOut />}>
          <Route element={<Footer />}>
            <Route path="/" element={<ItemsListContainer />} />
            <Route path="/carrito" element={<h1>Hola</h1>} />
            <Route path="/itemDetail" element={<ProductDetailContainer />} />
          </Route>
        </Route>

        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
/*<>
      <Typography variant="h2" color="primary">
        Hola
      </Typography>
      <Fetching />
    </>*/
/*<>
      <FetchingDeDatosContainer />
  </>*/
{
  /*<Grid container direction={"row"} spacing={1}>
      <Grid item margin={"10px"}>
        <Box>
          <Navbar>
            <Box>
              <Grid container direction={"row"} spacing={2} marginTop={"20px"}>
                <Grid item marginTop={"20px"}>
                  <ItemsListContainer />
                </Grid>
                <Grid item marginTop={"20px"}>
                  <ProductDetailContainer />
                </Grid>
              </Grid>
            </Box>
          </Navbar>
          <Users />
        </Box>
      </Grid>

  <Grid style={{ margin: "10px" }}>*/
}

{
  /*<Posts />*/
}
{
  /*<Users />*/
}
{
  /*<Comments />*/
}
{
  /*<ItemCount />*/
}
{
  /*</Grid>*/
}
{
  /*</Grid>*/
}
