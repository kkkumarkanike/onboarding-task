import React from "react";
import Input from "./Input";
import BigButton from "./Button";

function Step1({click}) {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <p  className="big-text">Welcome! First things first...</p>
        <p style={{ color: "#aaa", fontSize: "13px" }}>
          you can always change them later.
        </p>
      </div>

      <div style={{ width: "100%", marginTop: "3rem" }}>
        <Input label="Full Name" type="text" placeholder="Steve Jobs" />
        <Input label="Display Name" type="text" placeholder="Steve" />
      </div>
      <BigButton click={click} text="Create Workspace" />
    </div>
  );
}

export default Step1;
