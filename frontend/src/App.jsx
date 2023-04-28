import React, { useEffect, useState } from "react";
import axios from "axios";


import ScrollOnTop from "@components/scrollOnTop/scrollOnTop";
import CheckboxDeroulantGenre from "./components/filters/CheckboxDeroulantGenre";
import CheckboxDeroulantPlateforme from "./components/filters/CheckboxDeroulantPlateforme";

import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import MiniCard from "./components/MiniCard/MiniCard";
import CardDescription from "./components/CardDescription/CardDescription";
import "./App.css";
import "./index.scss";
import CarouselComponent from "./components/CarouselComponent";
import HeroImage from "./components/navBar/HeroImage";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

function sortGamesByTitle(games) {
  return games.sort((a, b) => a.titre.localeCompare(b.titre));
}
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

  const [selectedGenres, setSelectedGenres] = useState([]);

  const [showMenu, setShowMenu] = useState(false);

  const [description, setDescription] = useState(undefined);

  const [selectPlateformes, setSelectPlateformes] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5002/api/jeux")
      .then((res) => {
        const sortedGames = sortGamesByTitle(res.data); // tri des jeux par titre
        setCards(sortedGames);
      })
      .catch((err) => console.error(err));
  }, []);

  // console.log(selectPlateformes);

  return (
    <div className="App">
      <NavBar showMenu={showMenu} setShowMenu={setShowMenu} />
      <HeroImage
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        cards={cards}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        selectPlateformes={selectPlateformes}
        setSelectPlateformes={setSelectPlateformes}
      />
      <CarouselComponent className="caroussel" data={data} />

      <div style={{ textAlign: "center" }}>
        <div style={{ padding: "0 20px" }} />
      </div>
      <section className="cardsContainer">
        {cards
          .filter((card) =>
            searchTerm
              ? card.titre.toLowerCase().includes(searchTerm.toLowerCase())
              : card
          )
          .filter((card) => {
            if (selectPlateformes.length === 0) {
              return true;
            }
            return card.plateforme.some((plate) =>
              selectPlateformes
                .map((p) => p.toLowerCase())
                .includes(plate.toLowerCase())
            );
          })
          .filter((card) => {
            if (selectedGenres.length > 0) {
              let found = false;
              for (let i = 0; i < card.genre.length; i += 1) {
                const genre = card.genre[i];

                for (let j = 0; j < selectedGenres.length; j += 1) {
                  const selectedGenreName = selectedGenres[j].name;
                  if (genre === selectedGenreName) {
                    found = true;
                  }
                }
              }
              return found;
            }
            return true;
          })

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
      <ScrollOnTop />
      <Footer />
    </div>
  );
}

export default App;
