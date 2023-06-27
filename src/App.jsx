import { Layout } from "./components/layout/Layout";
import CartContainer from "./components/pages/cart/CartContainer";
import { ItemsListContainer } from "./components/pages/itemlistcontainer/ItemsListContainer";
import ProductDetailContainer from "./components/pages/productDetail/ProductDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ItemsListContainer />} />
          <Route path="/carrito" element={<CartContainer />} />
          <Route path="/itemDetail/:id" element={<ProductDetailContainer />} />
          <Route
            path="/itemDetail/price/:priceName"
            element={<ProductDetailContainer />}
          />
        </Route>

        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
