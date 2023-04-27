import React, { useEffect, useState } from "react";
import axios from "axios";

import CheckboxDeroulantGenre from "./components/filters/CheckboxDeroulantGenre";
import CheckboxDeroulantPlateforme from "./components/filters/CheckboxDeroulantPlateforme";

import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import MiniCard from "./components/MiniCard/MiniCard";
import CardDescription from "./components/CardDescription/CardDescription";
import "./App.css";
import "./index.scss";
import SearchBar from "./components/SearchBar/SearchBar";
import CarouselComponent from "./components/CarouselComponent";
import HeroImage from "./components/navBar/HeroImage";

function App() {
  const data = [
    {
      image: "https://jolstatic.fr/www/captures/1870/1/52821.jpg",
      caption: "Free To Play",
    },
    {
      image:
        "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: "Play with your friends",
    },
    {
      image:
        "https://images.pexels.com/photos/4317157/pexels-photo-4317157.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: "Top PC",
    },
    {
      image: "https://www.afjv.com/2023/02/230213-jeux-video.jpg",
      caption: "Top X-Box",
    },
    {
      image:
        "https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: "Top Nintendo",
    },
    {
      image:
        "https://images.pexels.com/photos/4293307/pexels-photo-4293307.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: "Top Mobile",
    },
    {
      image:
        "https://images.pexels.com/photos/459762/pexels-photo-459762.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: "Top PlayStation",
    },
  ];
  const [cards, setCards] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [showMenu, setShowMenu] = useState(false);

  const [description, setDescription] = useState(undefined);

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
      <NavBar showMenu={showMenu} setShowMenu={setShowMenu} />
      <HeroImage showMenu={showMenu} setShowMenu={setShowMenu} />
      <CarouselComponent className="caroussel" data={data} />

      <div style={{ textAlign: "center" }}>
        <div style={{ padding: "0 20px" }} />
      </div>
      <CheckboxDeroulantPlateforme />
      <CheckboxDeroulantGenre />
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
            return (
              <MiniCard
                cards={cards}
                card={card}
                key={card.id}
                setDescription={setDescription}
              />
            );
          })}
        {description && (
          <CardDescription
            description={description}
            setDescription={setDescription}
          />
        )}
      </section>

      <Footer />
    </div>
  );
}

export default App;
