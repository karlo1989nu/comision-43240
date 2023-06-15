import { useEffect, useState } from "react";
import FetchingDeDatos from "./FetchingDeDatos";

const FetchingDeDatosContainer = () => {
  const [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
    const promiseData = fetch("https://jsonplaceholder.typicode.com/users");
    promiseData
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(setUsers(data));
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  const createUser = () => {
    let data = {
      name: "Juan Perez",
      userName: "pe_ju",
      email: "juan.perez@gmail.es",
    };
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(data),
    });
  };

  return <FetchingDeDatos users={users} createUser={createUser} />;
};

export default FetchingDeDatosContainer;
