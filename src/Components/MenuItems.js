import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const MenuItems = ({ data }) => {
  return (
    <>
      {data.map((item, key) => (
        <MenuItem key={item}>
          <Link to="/about">{item}</Link>
        </MenuItem>
      ))}
    </>
  );
};

export default MenuItems;
