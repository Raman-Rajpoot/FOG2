import React from "react";
import './ServerInfo.css'
const ServerInfo = ({ serverInfo }) => {
  if (!serverInfo) return <p>Loading...</p>;

  const { settings, advanced, rules } = serverInfo;

  return (
    <div className="settings-container">
      <div className="category">
        <h4>Settings</h4>
        <div>
        {Object.entries(settings).map(([key, value]) => (
          <p key={key}>
            <span className="key">{key.charAt(0).toUpperCase() + key.slice(1)}:</span>{" "}
            <span className="value">{value}</span>
          </p>
        ))}
        </div>
      </div>
      <div className="category">
        <h4>Advanced</h4>
        <div>
        {Object.entries(advanced).map(([key, value]) => (
          <p key={key}>
            <span className="key">{key.charAt(0).toUpperCase() + key.slice(1)}:</span>{" "}
            <span className="value">{value}</span>
          </p>
        ))}
        </div>
      </div>
      <div className="category">
        <h4>Rules</h4>
        <div>
        {Object.entries(rules).map(([key, value]) => (
          <p key={key}>
            <span className="key">{key.charAt(0).toUpperCase() + key.slice(1)}:</span>{" "}
            <span className="value">{value}</span>
          </p>
        ))}
        </div>
      </div>
    </div>
  );
};

export default ServerInfo;
