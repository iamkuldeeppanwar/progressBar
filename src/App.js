import "./App.css";
import ProgressBar from "./components/progress_bar/ProgressBar";
import React, { useState } from "react";

const App = () => {
  const [progress, setProgress] = useState(0);
  const [intervalId, setIntervalId] = useState(0);
  const state = {
    size: 250,
    progress,
    strokeWidth: 15,
    circleOneStroke: "#d9edfe",
    circleTwoStroke: "#7ea9e1",
  };

  const startCounting = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(0);
      return;
    }

    const newIntervalId = setInterval(() => {
      setProgress((prevCount) => (prevCount === 100 ? 100 : prevCount + 1));
    }, 100);
    setIntervalId(newIntervalId);
  };

  return (
    <div className="App">
      <header className="App-header">
        <ProgressBar {...state} />
        <button className="button" onClick={startCounting}>
          {intervalId ? "Stop" : "Start"}
        </button>
      </header>
    </div>
  );
};

export default App;
