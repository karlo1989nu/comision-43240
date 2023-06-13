export const ItemsListPresentational = ({ items }) => {
  console.log(items);
  return (
    <>
      <div>
        <div>
          <h2>{items[0].title}</h2>
          <img src="" alt="" />
          <h2>Price:</h2>
        </div>
      </div>
    </>
  );
};
