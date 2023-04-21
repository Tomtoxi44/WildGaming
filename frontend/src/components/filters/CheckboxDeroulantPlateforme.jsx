import React, { useState } from "react";
import Select from "react-select";

function CheckboxDeroulantPlateforme() {
  const [selectedPlaystations, setSelectedPlaystations] = useState([]);
  const [selectedXboxes, setSelectedXboxes] = useState([]);
  const [selectedNintendos, setSelectedNintendos] = useState([]);
  const [selectedPcs, setSelectedPcs] = useState([]);
  const [selectedTelephones, setSelectedTelephones] = useState([]);
  const [selectedOthers, setSelectedOthers] = useState([]);
  const playstations = [
    { value: "playStation5", label: "PlayStation 5" },
    { value: "playStation4", label: "PlayStation 4" },
    { value: "playStation3", label: "PlayStation 3" },
    { value: "playStationvita", label: "PlayStation Vita" },
    { value: "playStation2", label: "PlayStation 2" },
  ];

  const handleChangePlaystations = (valueSelectedInOnChange) => {
    setSelectedPlaystations(valueSelectedInOnChange);
  };

  const xboxes = [
    { value: "xboxseriesxs", label: "Xbox Series X/S" },
    { value: "xboxone", label: "Xbox One" },
    { value: "xbox360", label: "Xbox 360" },
  ];

  const handleChangeXboxes = (e) => {
    setSelectedXboxes(e);
  };

  const nintendos = [
    { value: "nintendoswitch", label: "Nintendo Switch" },
    { value: "wiiu", label: "Wii U" },
    { value: "nintendods", label: "Nintendo DS" },
    { value: "gameboyadvance", label: "Game Boy Advance" },
    { value: "gameboycolor", label: "Game Boy Color" },
    { value: "gameboy", label: "Game Boy" },
    { value: "nes", label: "NES" },
  ];

  const handleChangeNintendos = (e) => {
    setSelectedNintendos(e);
  };

  const pcs = [
    { value: "microsoftwindows", label: "Microsoft Windows" },
    { value: "linux", label: "Linux" },
    { value: "macos", label: "(MacOS)" },
  ];

  const handleChangePcs = (e) => {
    setSelectedPcs(e);
  };

  const telephones = [
    { value: "ios", label: "iOS" },
    { value: "android", label: "Android" },
    { value: "consoleportable", label: "Console portable" },
  ];

  const handleChangeTelephones = (e) => {
    setSelectedTelephones(e);
  };
  const others = [
    { value: "stadia", label: "Stadia" },
    { value: "nvidiashield", label: "Nvidia Shield" },
  ];

  const handleChangeOthers = (e) => {
    setSelectedOthers(e);
  };

  return (
    <>
      <div>
        <h3>PlayStation</h3>
        <Select
          isMulti
          options={playstations}
          value={selectedPlaystations}
          onChange={handleChangePlaystations}
        />
      </div>
      <div>
        <h3>X Box</h3>
        <Select
          isMulti
          options={xboxes}
          value={selectedXboxes}
          onChange={handleChangeXboxes}
        />
      </div>
      <div>
        <h3>Nintendo</h3>
        <Select
          isMulti
          options={nintendos}
          value={selectedNintendos}
          onChange={handleChangeNintendos}
        />
      </div>
      <div>
        <h3>PC</h3>
        <Select
          isMulti
          options={pcs}
          value={selectedPcs}
          onChange={handleChangePcs}
        />
      </div>
      <div>
        <h3>Telephone</h3>
        <Select
          isMulti
          options={telephones}
          value={selectedTelephones}
          onChange={handleChangeTelephones}
        />
      </div>
      <div>
        <h3>Autres</h3>
        <Select
          isMulti
          options={others}
          value={selectedOthers}
          onChange={handleChangeOthers}
        />
      </div>
    </>
  );
}

export default CheckboxDeroulantPlateforme;
