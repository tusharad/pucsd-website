import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import Header from "./Components/Header";
import Landing from "./Components/Landing";
import JsonData from "./Data/data.json";
import { useState, useEffect } from "react";

function App() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div className="App">
      <Header data={landingPageData.Header} />
      <Landing />
      <h1>Hello WOrld!</h1>
      <Button variant="contained">Hello World</Button>
    </div>
  );
}

export default App;
