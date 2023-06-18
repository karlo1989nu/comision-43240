import { useEffect, useState } from "react";
import { productInstance } from "../../../api/axiosIntance";

const Fetching = () => {
  const [products, setProducts] = useState([]);

  const url = "http://localhost:5000/products";

  useEffect(() => {
    const getData = productInstance.get();
    getData
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const getProduct = productInstance.get("/102");
    getProduct.then((res) => console.log(res.data));
  }, []);

  const createProduct = () => {
    let data = {
      title: "Meowboy-Axios",
      description: "Meowidy meow",
      price: 5000,
      stock: 200,
      img: "https://atxanimalclinic.com/wp-content/uploads/2022/09/cats-and-catnip.jpg",
      category: "Catnip del rebueno",
    };

    const promiseCreate = productInstance.post("", data);
    promiseCreate
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const cambiarTodoElProducto = () => {
    let data = {
      title: "Meowboy-Axios",
      description: "Meowidy meow",
      price: 5000,
      stock: 200,
      img: "https://atxanimalclinic.com/wp-content/uploads/2022/09/cats-and-catnip.jpg",
      category: "Catnip del rebueno",
    };
    productInstance.put("/105", data);
  };

  return (
    <div>
      {products.map((product) => (
        <h1 key={product.id}>
          Name: {product.title} ID: {product.id}
        </h1>
      ))}
      <button onClick={createProduct}>New Product</button>
      <button onClick={cambiarTodoElProducto}>Cambiar Todo</button>
    </div>
  );
};

export default Fetching;
