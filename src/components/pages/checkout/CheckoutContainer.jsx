import { useFormik } from "formik";
import Checkout from "./Checkout";
import * as Yup from "yup";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";

const CheckoutContainer = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);

  let total = getTotalPrice();

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: { name: "", email: "", phone: "" },
    onSubmit: (data) => {
      let order = {
        buyer: data,
        items: cart,
        total: total,
      };

      let ordersCollection = collection(db, "orders");

      addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

      cart.forEach((e) => {
        updateDoc(doc(db, "products", e.id), { stock: e.stock - e.quantity });
      });

      clearCart();
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
    <div>
      {orderId ? (
        <h1>Compra exitosa, su número de orden es: {orderId}</h1>
      ) : (
        <Checkout
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          errors={errors}
        />
      )}
    </div>
  );
};

export default CheckoutContainer;
