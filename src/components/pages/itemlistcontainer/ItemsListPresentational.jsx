import ProductCard from "../../common/productCard/ProductCard";
import "./ItemListContainer.css";

export const ItemsListPresentational = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((e) => {
        return <ProductCard key={e.id} e={e} />;
      })}
    </div>
  );
};
