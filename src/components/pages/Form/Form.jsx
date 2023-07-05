import { useState } from "react";

export const Form = () => {
  const [name, setName] = useState("");
  console.log(name);
  const [lastName, setLastName] = useState("");
  console.log(lastName);

  const handleSubmit = (evento) => {
    evento.preventDefault();
  };

  const handleName = (evento) => {
    setName(evento.target.value);
  };
  const handleLastName = (evento) => {
    setLastName(evento.target.value);
  };
  return (
    <div>
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          name="nombre"
          onChange={handleName}
        />
        <input
          type="text"
          placeholder="Ingrese su apellido"
          name="apellido"
          onChange={handleLastName}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
