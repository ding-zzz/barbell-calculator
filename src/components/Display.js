// src/components/Display.js
import { useState } from "react";
import Submit from "./Submit";
import WeightAnimation from "./WeightAnimation";

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
            <Submit setShowSubmit={setShowSubmit} setPlates={setPlates} />
          ) : (
            <WeightAnimation plates={plates} />
          )}
        </div>
      </div>
    </>
  );
}
export default Display;
