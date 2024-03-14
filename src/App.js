import barbell from './img/barbell.jpg';
import { useState } from "react";
import './App.css';
import './index.css';
import WeightAnimation from './components/WeightAnimation.js';

function App() {
  
  function validationMessage(value){
    if (value<45){
      setIsValid(false);
      setErrorMessage("Please enter a weight above 45");
    } else if (value>1000){
      setIsValid(false);
      setErrorMessage("The max weight value is 1000");
    } else if (value % 5 !== 0){
      setErrorMessage("Please enter weight ending in 5 or 0")
    }
    else {
      setIsValid(true);
      return "";
    }
  };
  
  const handleChange = (event) => {
    const value = event.target.value;
    setWeight(event.target.value);
    validationMessage(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();    
    setPlates(calculate(weight));
    setSubmitted(true);
    console.log(platesObj);
    if (isValid) {
      console.log('Submitted weight:', weight);
    } else {
      console.error('Invalid weight:', weight);
    }
  };

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
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  //const [display, displayPlates] = useState("");
  //const [validationMessage, setValidationMethod] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <img src={barbell} alt="Barbell"/>
        <p>
          Barbell Calculator
        </p>
      </header>
        {!submitted ? (
          <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="weight">Total Weight:</label>
            <input 
              type="text" 
              value={weight} 
              name="weight" 
              onChange={(e) => handleChange(e)}
            ></input><br></br>
            <input type="submit" value="Calculate"></input>
          </form>
        </div>
        // {!isValid && <p className="validation1">{errorMessage}</p>}
        ) : (
          <WeightAnimation plates={plates}/>
        )}
      
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
