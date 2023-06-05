import { Box } from "@mui/system";
import { CartWidget } from "../../common/cartwidget/CartWidget";
import { Grid } from "@mui/material";


export const Navbar = () => {
  return (
    <Box>
      <Grid container direction="row" height={"2rem"}>
        <Grid item xs={12} md={4}>
          <img
            width={"100px"}
            src="https://static01.nyt.com/images/2022/06/21/science/14tb-Catnip1/14tb-Catnip1-jumbo.jpg?quality=75&auto=webp"
            alt="gatito con su plantita de catnip"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <h1>SUMAKU</h1>
          <h2>Tu Catnip-tienda oficial!</h2>
        </Grid>

        <Grid
          item
          display={"flex"}
          flexDirection="row"
          xs={12}
          md={4}
          justifyItems={"center"}
          textDecoration={"none"}
        >
          <nav>
            <button>Catnip Barato</button>
            <button>Catnip del bueno</button>
            <button>Catnip del rebueno</button>
          </nav>
          <Grid item>
            <CartWidget />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
