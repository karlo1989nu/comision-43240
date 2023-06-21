import { Box, Grid, Typography } from "@mui/material";
import { Navbar } from "./components/layout/navbar/Navbar";
import { ItemsListContainer } from "./components/pages/itemlistcontainer/ItemsListContainer";
//import FetchingDeDatosContainerfrom "./components/pages/fetchingDeDatos/FetchingDeDatosContainer";
import ProductDetailContainer from "./components/pages/productDetail/ProductDetailContainer";
import Fetching from "./components/pages/fetching/Fetching";
import { ItemCount } from "./components/common/counter/ItemCount";
import Users from "./components/Users";
import { Posts } from "./components/Posts";
import { Comments } from "./components/Comments";

const App = () => {
  return (
    /*<>
      <Typography variant="h2" color="primary">
        Hola
      </Typography>
      <Fetching />
    </>*/
    /*<>
      <FetchingDeDatosContainer />
  </>*/
    <Grid container direction={"row"} spacing={1}>
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
        </Box>
      </Grid>

      {/*<Grid style={{ margin: "10px" }}>*/}
      {/*<Users />*/}
      {/*<Posts /><Users />*}
      {/*<Comments />*/}
      {/*<ItemCount />*/}
      {/*</Grid>*/}
    </Grid>
  );
};

export default App;
