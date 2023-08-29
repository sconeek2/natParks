import React, { useEffect, useState } from "react";
import "./CSS/mountain.css";
import Hero from "./Components/Hero";
import CardCaller from "./Components/CardCaller";
import Records from "./data/mountains.json";
import RenderMount from "./Components/RenderMount";

function Mountains() {
  const [mountainArray, setMountainArray] = useState([]);
  const [chosenMtn, setChosenMtn] = useState("");

  useEffect(() => {
    setMountainArray(Records.mountains.map((record) => record.name));
  }, []);

  const selectMountain = mountainArray.map((mtn, index) => (
    <option key={index} value={mtn}>
      {mtn}
    </option>
  ));
  console.log("index is " + mountainArray.indexOf(chosenMtn));
  return (
    <div className="App">
      <Hero />
      <div className="mtn-select-container">
        <label for="mountains">Select a mountain: </label>
        <select
          id="mountains"
          name="mountains"
          onChange={(e) => setChosenMtn(e.target.value)}
        >
          <option value=""></option>
          {selectMountain}
        </select>
      </div>
      <h1>{chosenMtn}</h1>
      <h1>{mountainArray.indexOf(chosenMtn)}</h1>
      {/* <RenderMount mtnDisplay={chosenMtn} mountainArray={mountainArray} /> */}
      <CardCaller />
    </div>
  );
}

export default Mountains;
