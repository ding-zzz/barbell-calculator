import barbell from './img/barbell.jpg';
import { useState } from "react";
import './App.css';

function App() {
  const handleCalculate = (event) => {
    event.preventDefault();
    plates = calculate(weight);
  }
  const [weight, setWeight] = useState("");
  const [plates, getPlates] = useState("");
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
}

function calculate(weight) {
  let w = Number(weight);
  let plate45 = 0;
  let plate35 = 0;
  let plate25 = 0;
  let plate10 = 0;
  let plate5 = 0;
  let plate2p5 = 0;
  let plate1 = 0;

  while (w > 0){
    if (w>=90){
      plate45 += 1;
      w -= 90;
    } else if (w>=70){
      plate35 += 1;
      w -= 70;
    } else if (w>=50){
      plate25 += 1;
      w -= 50;
    } else if (w>=20){
      plate10 += 1;
      w -= 20;
    } else if (w>=10){
      plate5 += 1;
      w -= 10;
    } else if (w>=5){
      plate2p5 += 1;
      w -= 5;
    } else if (w>=2){
      plate1 += 1;
      w -= 2;
    } else break;

  }

  return [plate45,plate35,plate25,plate10,plate5,plate2p5,plate1];

}

export default App;
