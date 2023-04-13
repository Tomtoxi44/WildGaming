import React from "react";
import NavBar from "./components/navBar/NavBar";
import "./components/navBar/navBar.scss";
import HeroImage from "./components/navBar/HeroImage";
import Footer from "@components/footer/Footer";
import "./App.css";
import MiniCard from "./components/MiniCard/MiniCard";

function App() {
  return (
    <div className="App">

      <NavBar />
      <HeroImage />
      <MiniCard />
      <Footer />
    </div>
  );
}

export default App;
