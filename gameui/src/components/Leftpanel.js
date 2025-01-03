import React from "react";
import { NavLink } from "react-router-dom";
import "./LeftPanel.css";
import img1 from "../images/bf1.jpg";
import img2 from "../images/bf2.jpg";
import img3 from "../images/bf3.jpg";
import img4 from "../images/bf4.jpeg";
import img5 from "../images/play-button.png";
import img6 from "../images/news.png";

const LeftPanel = () => {
  return (
    <div className="left-panel">
      <ul>
        <li>
          <NavLink to="/battlefield" className="nav-link">
            <img src={img1} alt="Battlefield 1" className="nav-image" /> 
          </NavLink>
        </li>
        <li>
          <NavLink to="/battlefield" className="nav-link">
            <img src={img2} alt="Battlefield 2" className="nav-image" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/battlefield" className="nav-link">
            <img src={img3} alt="Battlefield 3" className="nav-image" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/battlefield" className="nav-link">
            <img src={img4} alt="Battlefield 4" className="nav-image" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/battlefield" className="nav-link">
            <img src={img1} alt="Battlefield 5" className="nav-image" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/battlefield" className="nav-link">
            <img src={img5} alt="Battlefield 6" className="nav-image" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/battlefield" className="nav-link">
            <img src={img6} alt="Battlefield News" className="nav-image" />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default LeftPanel;
