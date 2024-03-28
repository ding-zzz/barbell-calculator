import React, { Component } from "react";
//prettier-ignore
function WeightAnimation({ plates }) {
  return (
    <>
      <h1 className="font-display">
        Plates:<br></br>
        55 lbs: {plates.plate55} <br></br>
        45 lbs: {plates.plate45} <br></br>
        35 lbs: {plates.plate35} <br></br>
        25 lbs: {plates.plate25} <br></br>
        10 lbs: {plates.plate10} <br></br>
        5 lbs : {plates.plate5}  <br></br>
        2.5 lbs:{plates.plate2p5} <br></br>
      </h1>
    </>
  );
}

export default WeightAnimation;
