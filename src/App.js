import Header from "./Components/Header";
import Landing from "./Components/Landing";
import Footer from "./Components/Footer";
import data from "./data/data.json";
import { useState, useEffect } from "react";

function App() {
  const [PageData, setPageData] = useState({});
  console.log(PageData);
  useEffect(() => {
    setPageData(data);
  }, []);

  return (
    <div>
      <Header />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
