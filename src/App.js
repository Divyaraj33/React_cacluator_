import React, { useState } from "react";
import "./Calculator.css"; // Import CSS file
import { evaluate } from "mathjs";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const calculateResult = () => {
    try {
      setResult(evaluate(input).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input || "0"}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((char) => (
          <button
            key={char}
            onClick={() => (char === "=" ? calculateResult() : handleClick(char))}
            className="button"
          >
            {char}
          </button>
        ))}
        <button onClick={clearInput} className="button clear">Clear</button>
      </div>
    </div>
  );
}
