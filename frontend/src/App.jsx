import React, { useEffect, useState } from "react";
import axios from "axios";
import CheckboxDeroulantGenre from "./components/filters/CheckboxDeroulantGenre";
import CheckboxDeroulantPlateforme from "./components/filters/CheckboxDeroulantPlateforme";

import NavBar from "./components/navBar/NavBar";
import HeroImage from "./components/navBar/HeroImage";
import Footer from "./components/footer/Footer";
import "./App.css";
import MiniCard from "./components/MiniCard/MiniCard";
import "./index.scss";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5002/api/jeux")
      .then((res) => {
        setCards(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      <NavBar />
      <CheckboxDeroulantPlateforme />

      <CheckboxDeroulantGenre />
      <HeroImage />
      <MiniCard cards={cards} />
      <Footer />
    </div>
  );
}

export default App;
