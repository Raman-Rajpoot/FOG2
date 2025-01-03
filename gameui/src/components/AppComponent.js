import React, { useState, useEffect } from "react";
import ServerInfo from "./ServerInfo.js";
import PlayerList from "./PlayerList.js";
import "./AppComponent.css";
import MapRotation from "./MapRotation.js";
import ServerDetails from "./ServerDetails.js";
import Header from "./Header.js";
import LeftPanel from "./Leftpanel.js";
import img1 from '../images/map1.jpg';
import img2 from '../images/map2.jpg';
import img3 from '../images/map3.jpg';
import img4 from '../images/map4.jpg';
import img5 from '../images/map5.jpg';
import { Outlet } from "react-router-dom";
const AppComponent = () => {
  const [reqdata, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/server-info")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setError(null);
      })
      .catch((error) => setError(error.message));
  }, []);

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  if (!reqdata) {
    return <div className="loading">Loading...</div>;
  }
  const mapData = [
    {
      title: "Conquest Large Dawnbreaker",
      image: img1, // Replace with actual images
    },
    {
      title: "Conquest Large Propaganda",
      image: img2,
    },
    {
      title: "Conquest Large Operation Locker",
      image: img3,
    },
    {
      title: "Conquest Large Siege of Shanghai",
      image: img4,
    },
    {
      title: "Conquest Large Golmud Railway",
      image: img5,
    },
    {
      title: "Conquest Large Lancang Dam",
      image: img1,
    },
    {
      title: "Conquest Large Siege of Shanghai",
      image: img2,
    },
    {
      title: "Conquest Large Golmud Railway",
      image: img3,
    },
    {
      title: "Conquest Large Siege of Shanghai",
      image: img4,
    },
    {
      title: "Conquest Large Golmud Railway",
      image: img5,
    },
    {
      title: "Conquest Large Lancang Dam",
      image: img1,
    },
    {
      title: "Conquest Large Siege of Shanghai",
      image: img2,
    },
  ];
  return (
    <div className="app">
      <div class="background"></div>
      <div className="left-panel">
        <LeftPanel />
      </div>
      <div className="main-content">
      <Header  headerInfo={reqdata}/>
        <ServerDetails serverInfo={reqdata} />
              
        <ServerInfo serverInfo={reqdata} />
        
        <MapRotation maps={mapData} />
        <Outlet />
      </div>
      
      <div className="right-panel">
      <div className="right-nav">
        <PlayerList players={reqdata.players} />
        </div>
      </div>
      
    </div>
  );
};

export default AppComponent;
