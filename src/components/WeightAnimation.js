import React, { Component } from "react";

function WeightAnimation(props) {
  console.log("---- props", props);
  return (
    <>
      <h1 className="font-display">
        Plates:<br></br>
        55 lbs: {props.plates.plate55} <br></br>
        45 lbs: {props.plates.plate45} <br></br>
        35 lbs: {props.plates.plate35} <br></br>
        25 lbs: {props.plates.plate25} <br></br>
        10 lbs: {props.plates.plate10} <br></br>5 lbs: {props.plates.plate5}{" "}
        <br></br>
        2.5 lbs: {props.plates.plate2p5} <br></br>
      </h1>
    </>
  );
}

export default WeightAnimation;
