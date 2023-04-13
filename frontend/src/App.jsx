import React from "react";
import NavBar from "./components/navBar/NavBar";
import "./components/navBar/navBar.scss";
import HeroImage from "./components/navBar/HeroImage";

function App() {
  return (
    <div className="App">
      <NavBar />

      <HeroImage />
    </div>
  );
}

export default App;
