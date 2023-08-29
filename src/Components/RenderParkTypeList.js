import React, { useState, useEffect } from "react";
import parksData from "../data/nationalparks.json";
import "../CSS/RenderParkTypeList.css";

const RenderParkTypeList = ({ SelectedParkType }) => {
  const [filteredParks, setFilteredParks] = useState([]);

  useEffect(() => {
    const filteredData = parksData.parks.filter((park) => {
      return park.LocationName.includes(SelectedParkType);
    });
    setFilteredParks(filteredData);
  }, [SelectedParkType]);

  return (
    <div className="table-container">
      <table className="parks-table">
        <thead>
          <tr>
            <th>Park Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip Code</th>
          </tr>
        </thead>
        <tbody>
          {filteredParks.map((park) => (
            <tr>
              <td>{park.LocationName}</td>
              <td>{park.Address}</td>
              <td>{park.City}</td>
              <td>{park.State}</td>
              <td>{park.ZipCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RenderParkTypeList;
