function App() {
  const saludar = () => {
    console.log("Hola como estas");
  };

  return (
    <button onClick={saludar} style={{ backgroundColor: "blue" }}>
      Saludar
    </button>
  );
}

export default App;
