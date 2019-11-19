import React, { useState, useEffect } from "react";
import { Checkbox } from "@material-ui/core";
import "../../src/App.css";

function LocationBar() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    // setState for locations
    setLocations([
      { id: 1, name: "Norway" },
      { id: 2, name: "Canada" },
      { id: 3, name: "United Kingdom" },
      { id: 4, name: "Portugal" },
      { id: 5, name: "Spain" },
      { id: 6, name: "Germany" },
      { id: 7, name: "Yemen" },
      { id: 8, name: "United States" },
      { id: 9, name: "Colombia" },
      { id: 10, name: "Jamaica" }
    ]);
  }, []);

  return (

      <div className="col-2">
        <h4>Filters</h4>
        <ul style={{ listStyleType: "none" }}>
          <li key={1}>
            <Checkbox color="primary" /> Remote
          </li>
          <li key={2}>
            <Checkbox color="primary" /> Join Team VanHack!
          </li>
        </ul>

        <h6>Location</h6>
        <ul style={{ listStyleType: "none" }}>
          {locations.sort().map(location => (
            <li key={location.id}>
              <Checkbox color="primary" /> {location.name}
            </li>
          ))}
        </ul>

        <h6>Experience Level</h6>
        <ul style={{ listStyleType: "none" }}>
          <li key={1}>
            <Checkbox color="primary" /> 0-3 years
          </li>
          <li key={2}>
            <Checkbox color="primary" /> 4-6 years
          </li>
          <li key={3}>
            <Checkbox color="primary" /> 7+ years
          </li>
        </ul>
      </div>

  );
}

export default LocationBar;
