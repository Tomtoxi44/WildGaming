import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./components/navBar/NavBar";
import HeroImage from "./components/navBar/HeroImage";
import Footer from "./components/footer/Footer";
import MiniCard from "./components/MiniCard/MiniCard";
import CardDescription from "./components/CardDescription/CardDescription";
import "./App.css";
import "./index.scss";

function App() {
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

  const [description, setDescription] = useState(undefined);

  return (
    <div className="App">
      <NavBar />
      <HeroImage />
      <MiniCard cards={cards} key={cards.id} setDescription={setDescription} />
      {description && (
        <CardDescription
          description={description}
          setDescription={setDescription}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
