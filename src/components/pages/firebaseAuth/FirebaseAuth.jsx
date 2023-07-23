import { useNavigate } from "react-router-dom";
import { ingresar, loginWithGoogle, register } from "../../../firebaseConfig";
//import { ingresar, loginWithGoogle, register } from "../../../firebaseconfig";

const FirebaseAuth = () => {
  const navigate = useNavigate();

  let infoInput = {
    // email: "prueba@prueba.com",
    // password: "prueba",
    email: "andalaosa@prueba.com",
    password: "andalaosa",
  };

  const handleSubmit = async () => {
    let res = await ingresar(infoInput);
    console.log(res);
    navigate("/");
  };

  let registration = {
    email: "andalaosa@prueba.com",
    password: "andalaosa",
  };

  const regWithEml = async () => {
    let res = await register(registration);
    console.log(res);
  };

  const handleSubmitGoogle = async () => {
    let res = await loginWithGoogle();
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleSubmit}>Login</button>
      <button onClick={regWithEml}>Register</button>
      <button onClick={handleSubmitGoogle}>Ingresar con Google</button>
    </div>
  );
};

export default FirebaseAuth;
