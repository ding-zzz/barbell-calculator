// src/components/Submit.js
import React, { useState } from "react";
import Calculate from "../services/Calculate.js";
import { Component } from "react";
import "./Submit.css";
import "../index.css";
import "../App.css";

function Submit({ myProp, setMyProp }) {
  const [weight, setWeight] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmitted = () => {
    const data = false;
    // Call the function received from parent component
  };

  function validationMessage(value) {
    if (value < 45) {
      setIsValid(false);
      setErrorMessage("Please enter a weight above 45");
    } else if (value > 1000) {
      setIsValid(false);
      setErrorMessage("The max weight value is 1000");
    } else if (value % 5 !== 0) {
      setErrorMessage("Please enter weight ending in 5 or 0");
    } else {
      setIsValid(true);
      return "";
    }
  }

  const handleChange = (event) => {
    const value = event.target.value;
    setWeight(value);
    validationMessage(value);
  };

  const handleSubmit = (event) => {
    console.log(myProp);
    setMyProp(false);
    event.preventDefault();
    Calculate(weight);

    if (isValid) {
      console.log("Submitted weight:", weight);
      console.log();
    } else {
      console.error("Invalid weight:", weight);
    }
  };

  return (
    //jsx wrap in fragment with '<>'
    <>
      <div className="Submit">
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
        {!isValid && <p className="validation1">{errorMessage}</p>}
      </div>
    </>
  );
}
export default Submit;
