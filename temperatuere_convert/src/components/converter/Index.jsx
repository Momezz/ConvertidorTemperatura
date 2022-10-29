import React from "react";
import { useState } from "react";
import "./../converter/styles.css"

function TempCalc() {
  const [degrees, setDegrees] = useState(0);
  const [option, setOption] = useState("Kelvin");
  const [result, setResult] = useState(0);
  function numCatcher(event) {
    setDegrees(event.target.value);
  }

  function optionCatcher(event) {
    setOption(event.target.value);
  }
  function myFunction() {
    console.log("Function Operated")
    if ((option === "Kelvin")) {
      setResult(degrees - 273.5);
    } else {
      setResult((degrees - 32) * (5 / 9));
    }
  }
  return (
    <main className="convertCont">
      <section className="varCont" >
        <div className="degreeCont">
          <label htmlFor="degrees">Degrees</label>
          <input type="number" className="degrees" onChange={numCatcher} />
        </div>
        <div className="optionCont">
          <label htmlFor="type">Type</label>
          <select className="selectTemp" name="" id="" onChange={optionCatcher}>
            <option value="fahrenheit">Fahrenheit</option>
            <option value="Kelvin">Kelvin</option>
          </select>
        </div>
        <button onClick={myFunction}>Convert</button>
      </section>
      <footer>
        {console.log(result)}
        <label>Result</label>
        <div className="symbol">
          <p>{result.toFixed(2)}</p><span >°C</span>
        </div>
      </footer>
    </main>
  );
}
export default TempCalc