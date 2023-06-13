export const ItemsListPresentational = ({ items }) => {
  console.log(items);
  return (
    <>
      <div>
        <div>
          <h2>{items[0].title}</h2>
          <img src={items[0].img} alt="" />
          <h2>{items[0].price}</h2>
        </div>
        <div>
          <h2>{items[1].title}</h2>
          <img src={items[1].img} alt="" />
          <h2>{items[1].price}</h2>
        </div>
        <div>
          <h2>{items[2].title}</h2>
          <img src={items[2].img} alt="" />
          <h2>{items[2].price}</h2>
        </div>
        <div>
          <h2>{items[3].title}</h2>
          <img src={items[3].img} alt="" />
          <h2>{items[3].price}</h2>
        </div>
      </div>
    </>
  );
};
