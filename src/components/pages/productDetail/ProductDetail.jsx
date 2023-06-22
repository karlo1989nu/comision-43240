import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { ItemCount } from "../../common/counter/ItemCount";
import { Link } from "react-router-dom";

const ProductDetail = ({ productSelected }) => {
  const onAdd = (cantidad) => {
    let data = { ...productSelected, quantity: cantidad };

    console.log(data);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={productSelected.description}
        height="140"
        image={productSelected.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {productSelected.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${productSelected.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {productSelected.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small">
          <Link to={"/carrito"}>Comprar</Link>
        </Button>
      </CardActions>
      {productSelected.stock > 0 ? (
        <ItemCount stock={productSelected.stock} initial={1} onAdd={onAdd} />
      ) : (
        <h2>No hay stock</h2>
      )}
    </Card>
  );
};

export default ProductDetail;
