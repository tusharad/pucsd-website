import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import pucsd_logo from "../Images/pucsd_logo.jpg";
import Typography from "@mui/material/Typography";
export default function ButtonAppBar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "white" }}>
        <Toolbar>
          <img src={pucsd_logo} />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <h4 style={{ color: "#5a5a5a" }} sx={{ flexGrow: 1 }}>
            {props.data ? props.data.title : "Loading"}
            <span></span>
          </h4>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
