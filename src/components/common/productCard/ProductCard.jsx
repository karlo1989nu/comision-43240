import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const ProductCard = ({ e }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={e.description}
        height="140"
        image={e.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {e.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${e.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {e.description}
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

export default ProductCard;
