import React from "react";
import "./PlayerList.css";
import p1 from "../images/p1.jpeg";
import p2 from "../images/p2.jpg";

const PlayerList = ({ players }) => {
  if (!players) return <p>Loading...</p>;

  return (
    <div className="player-navbar">
      <button className="top-button"></button> {/* New button at the top */}
      {players.map((player, index) => {
        const playerImage = index % 2 === 0 ? p1 : p2;

        return (
          <div className="player-card" key={index}>
            <img
              src={playerImage}
              alt={`${player.name}'s avatar`}
              className="player-avatar"
            />
            <div className="player-info">
              <span className="player-name">{player.name}</span>
              <span className={`player-status ${player.status.toLowerCase()}`}>
                {player.status}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlayerList;
