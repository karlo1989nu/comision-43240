import { useFormik } from "formik";
import Checkout from "./Checkout";
import * as Yup from "yup";

const CheckoutContainer = () => {
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: { name: "", email: "", phone: "" },
    onSubmit: (data) => {
      console.log(data);
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required")
        .min(2, "Name must be min 2 characters long"),
      email: Yup.string().required("Required").email("Must be a valid email"),
      phone: Yup.string()
        .required("Required")
        .min(6, "Enter a valid phone number"),
    }),
  });
  return (
    <Checkout
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      errors={errors}
    />
  );
};

export default CheckoutContainer;
