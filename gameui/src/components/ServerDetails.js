import React from "react";
import "./ServerDetails.css";

function ServerDetails({ serverInfo }) {
  if (!serverInfo) return <p>Loading...</p>;

  return (
    <div className="server-details">
      <p><strong>Players:</strong> {serverInfo.players.length} / {serverInfo.maxPlayers}</p>
      <p><strong>Ping:</strong> {serverInfo.ping} ms</p>
      <p><strong>Tickrate:</strong> {serverInfo.tickrate}</p>
      </div>
  
  );
}

export default ServerDetails;
