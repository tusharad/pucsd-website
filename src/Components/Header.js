import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import pucsd_logo from "../Images/pucsd_logo.jpg";
import MenuItems from "./MenuItems";

function Header(props) {
  const { sections } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [items, setItems] = React.useState([]);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    const items = event.currentTarget.value.split(",");
    setItems(items);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          <img src={pucsd_logo} alt="" />
        </Typography>
      </Toolbar>

      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      >
        {sections.map((section, key) => (
          <div key={section.title}>
            <Button onClick={handleClick} value={section.data}>
              {section.title}
            </Button>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
              <MenuItems data={items} />
            </Menu>
          </div>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}
export default Header;
