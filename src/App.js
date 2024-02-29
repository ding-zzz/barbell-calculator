import barbell from './img/barbell.jpg';
import { useState } from "react";
import './App.css';

function App() {
  const handleCalculate = (event) => {
    event.preventDefault();
    setPlates(calculate(weight));
    console.log(platesObj);
  }
  const platesObj = {
    plate55: 0,
    plate45: 0,
    plate35: 0,
    plate25: 0,
    plate10: 0,
    plate5: 0,
    plate2p5: 0,
    plate1: 0,
  };
  const [weight, setWeight] = useState("");
  const [plates, setPlates] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <img src={barbell} alt="Barbell"/>
        <p>
          Barbell Calculator
        </p>
        <form onSubmit={handleCalculate}>
          <label for="weight">Total Weight:</label>
          <input 
            type="text" 
            value={weight} 
            name="weight" 
            onChange={(e) => setWeight(e.target.value)}
          ></input><br></br>
          <input type="submit" value="Calculate"></input>
        </form>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Plates.
        </a>
      </header>
    </div>

  );
  function calculate(weight) {
    let w = Number(weight-45);
  
    while (w > 0){
      if (w >=110){
        platesObj.plate55 +=1;
        w -=110;
      }else if (w>=90){
        platesObj.plate45 += 1;
        w -= 90;
      } else if (w>=70){
        platesObj.plate35 += 1;
        w -= 70;
      } else if (w>=50){
        platesObj.plate25 += 1;
        w -= 50;
      } else if (w>=20){
        platesObj.plate10 += 1;
        w -= 20;
      } else if (w>=10){
        platesObj.plate5 += 1;
        w -= 10;
      } else if (w>=5){
        platesObj.plate2p5 += 1;
        w -= 5;
      } else break;
  
    }
    return platesObj;
  
  }
}

export default App;
