import React from "react";
import { useTimer } from "./components/Timer/timer";
import Calculator from "./components/Calculator/Calculator";

function App() {
  const currentTime = useTimer();

  return (
    <div>
      <h1>Timer</h1>
      <Timer currentTime={currentTime} />
      <h1>Calculator</h1>
      <Calculator />
    </div>
  );
}

function Timer({ currentTime }) {
  return <p>{currentTime.toLocaleTimeString()}</p>;
}

export default App;
