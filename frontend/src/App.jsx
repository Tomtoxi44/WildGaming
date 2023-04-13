import React from "react";
import ConsoleButton from "./components/ConsoleButton/ConsoleButton";
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
      
      <div>
      <h1>CONSOLE : </h1>
      <div>
        <ConsoleButton nom="PlayStation 4" classe="bouton-ps4" />
      </div>
      <ConsoleButton nom="PlayStation 5" classe="bouton-ps5" />
      <ConsoleButton nom="Xbox" classe="bouton-xbox" />
      <ConsoleButton nom="PC" classe="bouton-pc" />
      <ConsoleButton nom="Switch" classe="bouton-switch" />
      <ConsoleButton nom="Game boy" class="bouton-Game-boy" />
      <h2>GENRE :</h2>
      <div>
        <ConsoleButton nom="Aventure" classe="bouton-aventure" />
        <ConsoleButton nom="Action" classe="bouton-action" />
        <ConsoleButton nom="RPG" classe="bouton-RPG" />
        <ConsoleButton nom="FPS" classe="bouton-FPS" />
        <ConsoleButton nom="Sport" classe="bouton-sport" />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
