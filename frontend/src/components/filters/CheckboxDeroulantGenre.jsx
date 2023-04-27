import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { MultiSelect } from "primereact/multiselect";

function CheckboxDeroulantGenre({ selectedGenres, setSelectedGenres }) {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5002/api/genres")
      .then((res) => {
        setGenres(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="">
      <MultiSelect
        value={selectedGenres}
        onChange={(e) => setSelectedGenres(e.value)}
        options={genres.map((genre) => {
          return { name: genre, code: genre };
        })}
        optionLabel="name"
        display="chip"
        placeholder="Genre"
        className="w-full md:w-20rem"
      />
    </div>
  );
}

export default CheckboxDeroulantGenre;

CheckboxDeroulantGenre.propTypes = {
  selectedGenres: PropTypes.string.isRequired,
  setSelectedGenres: PropTypes.string.isRequired,
};
