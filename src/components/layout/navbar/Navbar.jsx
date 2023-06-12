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
            src="https://res.cloudinary.com/dwzbz3j4q/image/upload/v1686596018/comision-43240/14tb-Catnip1-jumbo_cszi3n.jpg"
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
