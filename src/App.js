import barbell from './assets/barbell.jpg';
import { useState } from "react";
import './App.css';
import './index.css';
import WeightAnimation from './components/WeightAnimation.js';
import Calculate from './services/Calculate.js';
import PlatesObj from './services/Calculate.js';
import Submit from './components/Submit.js';

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
    setPlates(Calculate(weight));
    setSubmitted(true);
    console.log(PlatesObj);
    if (isValid) {
      console.log('Submitted weight:', weight);
    } else {
      console.error('Invalid weight:', weight);
    }
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
        // {!isValid && <p className="validation1"> {errorMessage} </p>}
        ) : (
          <WeightAnimation plates={plates}/>
        )}
      </header>
    </div>

  );
}

export default App;
