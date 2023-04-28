import React, { useState, useEffect } from "react";
import { MultiSelect } from "primereact/multiselect";
import axios from "axios";
import PropTypes from "prop-types";

function CheckboxDeroulantPlateforme({
  selectPlateformes,
  setSelectPlateformes,
}) {
  const [plateformes, setPlateformes] = useState([]);

  const groupedItemTemplate = (option) => {
    return (
      <div className="flex align-items-center">
        <div>{option.label}</div>
      </div>
    );
  };
  useEffect(() => {
    axios
      .get("http://localhost:5002/api/plateformes")
      .then((res) => {
        setPlateformes(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="card flex justify-content-center">
      <MultiSelect
        value={selectPlateformes}
        options={plateformes}
        onChange={(e) => setSelectPlateformes(e.value)}
        optionLabel="label"
        optionGroupLabel="label"
        optionGroupChildren="items"
        optionGroupTemplate={groupedItemTemplate}
        placeholder="Select Plateformes"
        display="chip"
        className="w-full md:w-20rem"
      />
    </div>
  );
}

export default CheckboxDeroulantPlateforme;

CheckboxDeroulantPlateforme.propTypes = {
  selectPlateformes: PropTypes.string.isRequired,
  setSelectPlateformes: PropTypes.string.isRequired,
};
