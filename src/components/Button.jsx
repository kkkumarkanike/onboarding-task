import React from "react";
import { Button } from "react-bootstrap";

function BigButton({text,click}) {
  return (
    <div
      className="big-btn"
      onClick={click}
    >
      {text}
      
    </div>
  );
}

export default BigButton;
