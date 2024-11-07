import React from "react";
import { useState } from "react";

const UseStateGotcha = () => {
  const [number, setNumber] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      setNumber((currentState) => {
        return currentState + 1;
      });
    }, 3000);
  };

  return (
    <div>
      <h2>{number}</h2>
      <button type="button" onClick={handleClick}>
        Increase
      </button>
    </div>
  );
};

export default UseStateGotcha;
