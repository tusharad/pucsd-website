const MenuItems = ({ data }) => {
  const items = data.split(",");
  return (
    <>
      {items.map((item, key) => (
        <p key={item}>{item}</p>
      ))}
    </>
  );
};

export default MenuItems;
