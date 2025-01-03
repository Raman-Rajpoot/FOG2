import React from "react";
import "./MapRotation.css";

const MapRotation = ({ maps }) => {
  return (
    <div className="map-rotation">
      <h2>MAP ROTATION</h2>
      <div className="map-grid">
        {maps.map((map, index) => (
          <div key={index} className="map-card">
            <img src={map.image} alt={map.title} className="map-image" />
            <div className="map-title">{map.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapRotation;
