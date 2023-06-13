import { Navbar } from "./components/layout/navbar/Navbar";
import { ItemsListContainer } from "./components/pages/itemlistcontainer/ItemsListContainer";

const App = () => {
  return (
    <>
      <nav style={{ margin: "30px" }}>
        {" "}
        <Navbar />
      </nav>
      <ItemsListContainer />
    </>
  );
};

export default App;
