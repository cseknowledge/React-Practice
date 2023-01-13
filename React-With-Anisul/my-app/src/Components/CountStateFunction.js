import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { MdExposurePlus1, MdExposureNeg1 } from "react-icons/md";

export default function CountStateFunction() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div style={{ background: "white", padding: "15px" }}>
      <h2>Count: {count}</h2>
      <Button
        className="btn-custom"
        variant="success"
        onClick={handleIncrement}
      >
        <MdExposurePlus1 /> Increment
      </Button>
      <Button
        className="btn-custom"
        variant="warning"
        onClick={handleDecrement}
        disabled={count === 0 ? true : false}
      >
        <MdExposureNeg1 /> Decrement
      </Button>
    </div>
  );
}
