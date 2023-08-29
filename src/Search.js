import Hero from "./Components/Hero";
import parkData from "./data/parktypes.json";
import CardCaller from "./Components/CardCaller";
import "./CSS/search.css";
import { useState } from "react";
import RenderParkTypeList from "./Components/RenderParkTypeList";

const Search = () => {
  const [typeOfPark, setTypeOfPark] = useState("");

  //looping through the array to assign each type of park to an <option> for the Select menu
  const selectParks = parkData.map((park, index) => (
    <option key={index} value={park}>
      {park}
    </option>
  ));

  return (
    <div>
      <Hero />

      <div className="park-data-container">
        {/* this is the start of the select menu */}
        <label className="select-label" for="cars">
          Select a park type:
        </label>

        <select
          className="select-container"
          name="cars"
          id="cars"
          value={typeOfPark}
          onChange={(e) => setTypeOfPark(e.target.value)}
        >
          <option value=""></option>
          {selectParks}
        </select>
      </div>
      <RenderParkTypeList SelectedParkType={typeOfPark} />

      <CardCaller />
    </div>
  );
};

export default Search;
