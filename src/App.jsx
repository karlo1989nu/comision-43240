import { Layout } from "./components/layout/Layout";
import { CartContextProvider } from "./context/CartContext";
import { menuRoutes } from "./routes/menuRoutes";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<Layout />}>
            {menuRoutes.map(({ id, path, Element }) => (
              <Route key={id} path={path} element={<Element />} />
            ))}
          </Route>
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
};

export default App;
