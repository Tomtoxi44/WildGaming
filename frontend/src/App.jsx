import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./components/navBar/NavBar";
import HeroImage from "./components/navBar/HeroImage";
import Footer from "./components/footer/Footer";
import "./App.css";
import MiniCard from "./components/MiniCard/MiniCard";
import "./index.scss";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [cards, setCards] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5002/api/jeux")
      .then((res) => {
        // console.log(res.data)
        setCards(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      <NavBar />
      <HeroImage />
      <SearchBar
        cards={cards}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <section className="cardsContainer">
        {cards
          .filter((card) =>
            searchTerm
              ? card.titre.toLowerCase().includes(searchTerm.toLowerCase())
              : card
          )
          .map((card) => {
            return <MiniCard cards={cards} card={card} key={card.id} />;
          })}
      </section>
      <Footer />
    </div>
  );
}

export default App;
