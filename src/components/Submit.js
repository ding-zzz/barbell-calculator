// src/components/Submit.js
import React, { useState } from 'react';
import Calculate from '../services/Calculate.js';

const Submit = ({ onSubmit }) => {
  const [weight, setWeight] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

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
    setWeight(value);
    validationMessage(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(weight);    
    Calculate(weight);

    if (isValid) {
      console.log('Submitted weight:', weight);
    } else {
      console.error('Invalid weight:', weight);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="weight">Total Weight:</label>
        <input
          type="text"
          placeholder="Enter your submission"
          value={weight}
          onChange={(e) => handleChange(e)}
        />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Submit;
