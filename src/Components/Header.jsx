import Navbar from "react-bootstrap/Navbar";
import pucsd_logo from "../Images/pucsd_logo.jpg";

const Header = () => {
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Navbar.Brand href="/">
            <img alt="" src={pucsd_logo} className="d-inline-block align-top" thumbnail />
          </Navbar.Brand>
      </Navbar>
    </>
  );
};

export default Header;
