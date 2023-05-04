import React, { useEffect } from "react";
import { MultiSelect } from "primereact/multiselect";
import axios from "axios";
import PropTypes from "prop-types";

function CheckboxDeroulantPlateforme({
  selectPlateformes,
  setSelectPlateformes,
  plateformes,
  setPlateformes,
}) {
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
    <div className="CheckboxPlateforme">
      <div className="CheckboxPlateformeScrollbar">
        <MultiSelect
          value={selectPlateformes}
          options={plateformes}
          onChange={(e) => setSelectPlateformes(e.value)}
          optionLabel="label"
          optionGroupLabel="label"
          optionGroupChildren="items"
          optionGroupTemplate={groupedItemTemplate}
          placeholder="Plateforme"
          display="chip"
          className="multiPlateforme"
          // w-full md:w-20rem
        />
      </div>
    </div>
  );
}

export default CheckboxDeroulantPlateforme;

CheckboxDeroulantPlateforme.propTypes = {
  selectPlateformes: PropTypes.string.isRequired,
  setSelectPlateformes: PropTypes.string.isRequired,
  plateformes: PropTypes.string.isRequired,
  setPlateformes: PropTypes.string.isRequired,
};
