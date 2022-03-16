import React from "react";

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
