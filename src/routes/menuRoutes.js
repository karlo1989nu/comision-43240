import { Form } from "../components/pages/Form/Form";
import CartContainer from "../components/pages/cart/CartContainer";
import CheckoutContainer from "../components/pages/checkout/CheckoutContainer";
import FormFormik from "../components/pages/formFormik/FormFormik";
import { ItemsListContainer } from "../components/pages/itemlistcontainer/ItemsListContainer";
import ProductDetailContainer from "../components/pages/productDetail/ProductDetailContainer";

export const menuRoutes = [
  { id: "home", path: "/", Element: ItemsListContainer },
  { id: "carrito", path: "/carrito", Element: CartContainer },
  {
    id: "itemDetail",
    path: "/itemDetail/:id",
    Element: ProductDetailContainer,
  },
  {
    id: "categoryName",
    path: "/categoryName/:categoryName",
    Element: ItemsListContainer,
  },
  { id: "form", path: "/form", Element: Form },
  { id: "formFormik", path: "/formFormik", Element: FormFormik },
  { id: "checkout", path: "/checkout", Element: CheckoutContainer },
];
