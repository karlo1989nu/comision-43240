import { useState } from "react";
import { Navbar } from "./components/layout/navbar/Navbar";
import { ProductsList } from "./components/pages/itemlistcontainer/ItemListContainer";
import { Greeting } from "./greeting/Greeting";

const App = () => {
  const [nombre, setNombre] = useState("Mao");
  const [isDark, setIsDark] = useState(true);
  let edad = 7;
  console.log(isDark);

  return (
    <div>
      <Navbar />
      <ProductsList nombre={nombre} edad={edad} />
      <button onClick={() => setNombre("Kuki")}>Cambiar nombre</button>
      <button onClick={() => setIsDark(!isDark)}>IsDark?</button>
      <Greeting name="Fulano" />
    </div>
  );
};

export default App;
