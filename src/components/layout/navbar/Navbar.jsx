import { Link } from "react-router-dom";
import { CartWidget } from "../../common/cartwidget/CartWidget";
import { Button, Grid } from "@mui/material";

export const Navbar = () => {
  return (
    <div className="navbarContainer">
      <Grid container direction="row" height={"2rem"} spacing={0}>
        <Grid item xs={12} md={4}>
          <img
            width={"100px"}
            src="https://res.cloudinary.com/dwzbz3j4q/image/upload/v1686596018/comision-43240/14tb-Catnip1-jumbo_cszi3n.jpg"
            alt="gatito con su plantita de catnip"
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <Link to={"/"}>
            <h1>SUMAKU</h1>
            <h2>Tu Catnip-tienda oficial!</h2>
          </Link>
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
          <Button variant="contained" size="small">
            Catnip Barato
          </Button>
          <Button variant="contained" size="small">
            Catnip del bueno
          </Button>
          <Button variant="contained" size="small">
            Catnip del rebueno
          </Button>
          <Link to={"/carrito"}>
            <CartWidget />
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};
