import { Grid } from "@mui/material";
import { Navbar } from "./components/layout/navbar/Navbar";
import { ItemsListContainer } from "./components/pages/itemlistcontainer/ItemsListContainer";

const App = () => {
  return (
    <Grid container direction={"column"} spacing={1}>
      <Grid item>
        <nav style={{ margin: "30px" }}>
          <Navbar />
        </nav>
      </Grid>
      <Grid container spacing={2} margin={"20px"}>
        <ItemsListContainer />
      </Grid>
    </Grid>
  );
};

export default App;
