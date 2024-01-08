import React, { useState } from "react";
import { SaveDataCharacter, SaveDataSeries } from "../ApiData/SaveDataRedux";
import SeriesData from "./SeriesData";

function ItemsComponent() {
  const characters = SaveDataCharacter();
  const series = SaveDataSeries();

  const [selectedSeries, setSelectedSeries] = useState("All");

  const displayedCharacters =
    selectedSeries === "All"
      ? characters
      : characters.filter((character) => character.type === selectedSeries);

  return (
    <>
      <div className="w-11/12 mx-auto px-6 border-black border-b ">
        {series.map((series) => (
          <button
            key={series}
            className={`text-xl px-6 py-2 mx-2 hover:bg-slate-300 rounded ${
              selectedSeries === series ? "bg-slate-300" : "bg-white"
            }`}
            onClick={() => setSelectedSeries(series)}
          >
            {series}
          </button>
        ))}
      </div>
      <div className="w-11/12 mx-auto flex flex-wrap gap-6 px-2 py-8">
        {displayedCharacters.map((character) => (
          <SeriesData key={character.head} character={character} />
        ))}
      </div>
    </>
  );
}

export default ItemsComponent;
