import Divider from "@mui/material/Divider";
const MenuItems = ({ data }) => {
  const items = data.split(",");
  return (
    <>
      {items.map((item, key) => (
        <>
          <p key={item}>{item}</p>
          <Divider />
        </>
      ))}
    </>
  );
};

export default MenuItems;
