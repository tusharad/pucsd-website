import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import pucsd_logo from "../Images/pucsd_logo.jpg";
import { Link } from "react-router-dom";

function Header(props) {
  const { sections } = props;
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
            <Link to={section.url}>
              <Button>{section.title}</Button>
            </Link>
          </div>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}
export default Header;
