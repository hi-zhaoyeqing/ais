import React from "react";
import "./index.css";

const FloatingText = ({ text }) => {
  const colors = [
    "#f44336",
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#2196f3",
    "#03a9f4",
    "#00bcd4",
    "#009688",
    "#4caf50",
    "#8bc34a",
    "#cddc39",
    "#ffeb3b",
    "#ffc107",
    "#ff9800",
    "#ff5722",
    "#795548",
    "#9e9e9e",
    "#607d8b",
  ];
  const position = {
    color: colors[Math.floor(Math.random() * 20)]
  };


  return (
    <div
      className="floating-text"
      style={{ color:position.color }}
    >
      {text}
    </div>
  );
};

export default FloatingText;
