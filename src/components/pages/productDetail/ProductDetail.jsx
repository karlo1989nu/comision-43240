import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const ProductDetail = ({ productSelected }) => {
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
          Comprar
        </Button>
        <Button variant="contained" size="small">
          Ver Detalle
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductDetail;
