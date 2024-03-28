// src/components/Display.js
import { useState } from "react";
import Submit from "./Submit";
import WeightAnimation from "./WeightAnimation";
//import { submitted } from "../services/Flags";

function Display() {
  const [plates, setPlates] = useState("");
  const [showSubmit, setShowSubmit] = useState(true);

  const handleShowSubmit = (data) => {
    setShowSubmit(data);
  };

  return (
    <>
      <div>
        <div className="container">
          {showSubmit ? (
            <Submit myProp={showSubmit} setMyProp={setShowSubmit} />
          ) : (
            <WeightAnimation plates={plates} />
          )}
          {console.log(showSubmit)}
        </div>
      </div>
    </>
  );
}
export default Display;
