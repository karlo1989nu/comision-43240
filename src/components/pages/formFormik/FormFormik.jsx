import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormFormik = () => {
  const { handleSubmit, handleChange } = useFormik({
    initialValues: { nombre: "", email: "", telefono: "" },
    onSubmit: (datos) => {
      console.log("Formulario enviado");
      console.log(datos);
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required(),
    }),
  });
  return (
    <div style={{ padding: "40px" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre"
          variant="outlined"
          name="nombre"
          onChange={handleChange}
        />
        <TextField
          label="E-mail"
          variant="outlined"
          name="email"
          onChange={handleChange}
        />
        <TextField
          label="Telefono"
          variant="outlined"
          name="telefono"
          onChange={handleChange}
        />
        <Button variant="contained" size="small" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default FormFormik;
