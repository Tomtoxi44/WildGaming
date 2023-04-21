import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";

function CheckboxDeroulantGenre() {
  const [selectedgenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5002/api/genres")
      .then((res) => {
        setGenres(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (e) => {
    setSelectedGenres(e);
  };

  return (
    <>
      <h3>Genre</h3>
      <Select
        isMulti
        options={genres.map((genre) => {
          return { value: genre, label: genre };
        })}
        value={selectedgenres}
        onChange={handleChange}
      />
    </>
  );
}

export default CheckboxDeroulantGenre;
