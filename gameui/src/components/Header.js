import React from "react";
import "./Header.css"; // Ensure you link the CSS file

function Header({ headerInfo }) {
  console.log(headerInfo);

  return (
    <div className="header-container">
       <h1 className="header-info">SERVER INFO</h1>
      <div className="header">
        <h1 className="header-title">{headerInfo.name}</h1>
        <p className="header-details">{headerInfo.details}</p>
        <p className="description">{headerInfo.description}</p>
      </div>

      <div className="actions">
        <button className="btn join">JOIN</button>
        <button className="btn spectate">SPECTATE</button>
        <button className="btn commander">JOIN AS COMMANDER</button>
        <button className="score">★ {headerInfo.score}</button>
      </div>
    </div>
  );
}

export default Header;
