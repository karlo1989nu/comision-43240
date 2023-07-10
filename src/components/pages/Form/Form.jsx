import { useState } from "react";

export const Form = () => {
  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
  });

  const handleSubmit = (evento) => {
    evento.preventDefault();

    if (userData.name.length < 3) {
      console.log("Username must be larger than 3 characters.");
      return;
    }

    if (!userData.lastName.includes("@" && ".")) {
      console.log("Incorrect email.");
      return;
    }

    let data = {
      userName: userData.name,
      userLastName: userData.lastName,
    };

    console.log(data);
  };

  const handleChange = (evento) => {
    setUserData({ ...userData, [evento.target.name]: evento.target.value });
  };

  return (
    <div>
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          name="name"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Ingrese su apellido"
          name="lastName"
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
