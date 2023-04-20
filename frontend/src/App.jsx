import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.scss";
import ConsoleButton from "./components/ConsoleButton/ConsoleButton";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import "./App.css";
import MiniCard from "./components/MiniCard/MiniCard";
import CarouselComponent from "./components/CarouselComponent";

function App() {
  const data = [
    {
      image:
        "https://www.lafinancepourtous.com/wp-content/thumbnails/uploads/2021/04/jeux_video_460-tt-width-460-height-260-fill-0-crop-0-bgcolor-eeeeee.png",
      caption: "free play",
    },
    {
      image:
        "https://www.economie.gouv.fr/files/styles/image_contenu_article_espace/public/files/directions_services/dgccrf/imgs/fiches_pratiques/2019/Jeux-en-ligne.jpg?itok=TNOsY2Xc",
      caption: "play whith you're friends",
    },
    {
      image:
        "https://img.offers-cdn.net/assets/uploads/offers/fr/16201806/la-selection-jeux-video-large.jpeg",
      caption: "top selection",
    },
    {
      image:
        "https://f.hellowork.com/blogdumoderateur/2021/05/jeux-video-accenture-1200x628.jpeg",
      caption: "top PC",
    },
    {
      image: "https://www.afjv.com/2023/02/230213-jeux-video.jpg",
      caption: "top X-Box",
    },
    {
      image:
        "https://comarketing-news.fr/wp-content/uploads/chiffres-jeu-video.jpg",
      caption: "pokemon World",
    },
  ];
  const [cards, setCards] = useState([]);

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

      <div>
        <NavBar />
        <HeroImage />
        <CarouselComponent data={data} />
      </div>
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            padding: "0 20px",
          }}
        />
      </div>

      <div>
        <MiniCard cards={cards} />
        <div>
          <h1>CONSOLE : </h1>
        </div>
        <div>
          <ConsoleButton nom="PlayStation 4" classe="bouton-ps4" />
        </div>

        <ConsoleButton nom="PlayStation 5" classe="bouton-ps5" plateforme="" />
        <ConsoleButton nom="Xbox" classe="bouton-xbox" />
        <ConsoleButton nom="PC" classe="bouton-pc" />
        <ConsoleButton nom="Switch" classe="bouton-switch" />
        <ConsoleButton nom="Game boy" classe="bouton-Game-boy" />
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
    </div>
  );
}

export default App;
