import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormFormik = () => {
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      telefono: "",
      password: "",
      repeatPassword: "",
    },
    onSubmit: (datos) => {
      console.log("Formulario enviado");
      console.log(datos);
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("Su nombre es requerido")
        .min(2, "Su nombre tiene que ser mayor a una letra"),
      email: Yup.string()
        .required("Enter a valid email")
        .email("Email not valid"),
      password: Yup.string()
        .required("Required")
        .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,15}$/, {
          message: "Incorrect password",
        }),
      repeatPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password")], "Passwords must be the same"),
    }),
  });

  console.log(errors);
  return (
    <div style={{ padding: "40px" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre"
          variant="outlined"
          name="nombre"
          onChange={handleChange}
          error={errors.nombre ? true : false}
          helperText={errors.nombre}
        />
        <TextField
          label="E-mail"
          variant="outlined"
          name="email"
          onChange={handleChange}
          error={errors.email ? true : false}
          helperText={errors.email}
        />
        <TextField
          label="Password"
          variant="outlined"
          name="password"
          onChange={handleChange}
          error={errors.password ? true : false}
          helperText={errors.password}
        />
        <TextField
          label="RepeatPassword"
          variant="outlined"
          name="repeatPassword"
          onChange={handleChange}
          error={errors.repeatPassword ? true : false}
          helperText={errors.repeatPassword}
        />
        <TextField
          label="Telefono"
          variant="outlined"
          name="telefono"
          onChange={handleChange}
          error={errors.telefono ? true : false}
          helperText={errors.telefono}
        />
        <Button variant="contained" size="small" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default FormFormik;
