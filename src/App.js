import "./App.css";
import React, { useState } from "react";

function App() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBMI] = useState("");
  const [msg, setMsg] = useState("");

  const calculateBMI = () => {
    const bmiCal = (weight / (height / 100) ** 2).toFixed(2);

    if (bmiCal < 18.5) {
      setMsg("Underweight");
    } else if (bmiCal >= 18.5 && bmiCal <= 24.9) {
      setMsg("Healthy");
    } else if (bmiCal >= 25 && bmiCal <= 29.9) {
      setMsg("Overweight");
    } else if (bmiCal >= 30 && bmiCal <= 34.9) {
      setMsg("Obese");
    } else if (bmiCal >= 35) {
      setMsg("Extremely obese");
    }

    setBMI(bmiCal);
  };

  return (
    <div className="App">
      <div className="MainContainer">
        <h1>BMI Calculator</h1>
        <div className="weightCont">
          <h1>Weight(kg)</h1>
          <input
            type="number"
            placeholder="Enter your weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="heightCont">
          <h1>Height(cm)</h1>
          <input
            type="number"
            placeholder="Enter your Height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <button onClick={calculateBMI}>Calculate BMI</button>
        <h1>Your BMI is: {bmi}</h1>
        <p>This is considered: {msg}</p>
      </div>
    </div>
  );
}

export default App;
