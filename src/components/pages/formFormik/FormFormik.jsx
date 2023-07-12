import { TextField } from "@mui/material";

const FormFormik = () => {
  return (
    <div>
      <form>
        <TextField label="Nombre" variant="outlined" />
        <TextField label="E-mail" variant="outlined" />
        <TextField label="Telefono" variant="outlined" />
      </form>
    </div>
  );
};

export default FormFormik;
