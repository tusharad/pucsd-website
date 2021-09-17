import "./App.css";
import Button from "react-bootstrap/Button";
import Header from "./Components/Header";
import Landing from "./Components/Landing";
import data from "./Data/data.json";
import { useState, useEffect } from "react";
function App() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(data);
  }, []);

  return (
    <div className="App">
      <Header />
      <Landing data={landingPageData.LandingData} />
      <h1>PUCSD</h1>
      <Button>Click me!</Button>
    </div>
  );
}

export default App;
