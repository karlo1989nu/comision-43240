import { useState } from "react";
import { Navbar } from "./components/layout/navbar/Navbar";
import { ItemsListContainer } from "./components/pages/itemlistcontainer/ItemsListContainer";

const App = () => {
  const [montado, setMontado] = useState(false);
  const [nombre, setNombre] = useState("Karlo");
  return (
    <>
      <nav style={{ margin: "30px" }}>
        {" "}
        <Navbar />
      </nav>
      {montado && <ItemsListContainer nombre={nombre} />}
      <button onClick={() => setMontado(!montado)}>Montar</button>
      <button onClick={() => setNombre("Pepe")}>Name</button>
    </>
  );
};

export default App;
