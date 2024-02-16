import React, { useState } from "react";

function Calculator() {
  const [inputValue, setInputValue] = useState("");
  const [history, setHistory] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOperation = (operator) => {
    setHistory([...history, inputValue, operator]);
    setInputValue("");
  };

  const calculateResult = () => {
    if (inputValue && history.length >= 2) {
      const lastInput = history[history.length - 1];
      const result = eval(
        `${history[history.length - 2]} ${lastInput} ${inputValue}`
      );
      const newHistory = [...history.slice(0, -2), result];

      setHistory([...newHistory]);
      setInputValue("");
    } else {
      console.error("No hay suficientes datos para calcular un resultado.");
    }
  };

  const sortedHistory = history.slice().sort((a, b) => a - b);

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={() => handleOperation("+")}>+</button>
      <button onClick={() => handleOperation("-")}>-</button>
      <button onClick={() => handleOperation("*")}>*</button>
      <button onClick={() => handleOperation("/")}>/</button>
      <button onClick={calculateResult}>=</button>

      <h2>Último resultado: {history[history.length - 1]}</h2>

      <h3>Historial:</h3>
      <ul>
        {sortedHistory.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Calculator;
