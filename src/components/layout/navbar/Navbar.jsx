import { CartWidget } from "../../common/cartwidget/CartWidget";

export const Navbar = () => {
  return (
    <div>
      <h4>Imagen</h4>
      <h1>SUMAKU</h1>
      <h2>Tu Catnip-tienda oficial!</h2>
      <ul>
        <li>Todo</li>
        <li>Descuento</li>
        <li>ClubBoGi</li>
      </ul>
      <div>
        <CartWidget />
        <span>
          <h2>2</h2>
        </span>
      </div>
    </div>
  );
};
