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
    <>
      <nav style={{ margin: "30px" }}>
        {" "}
        <Navbar />
      </nav>
      <main>
        <ProductsList nombre={nombre} edad={edad} />
        <button onClick={() => setNombre("Kuki")}>Cambiar nombre</button>
        <button onClick={() => setIsDark(!isDark)}>IsDark?</button>
        <Greeting name="Fulano" />
      </main>
    </>
  );
};

export default App;
