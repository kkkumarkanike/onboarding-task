import React from "react";
import Input from "./Input";
import BigButton from "./Button";
import UrlInput from "./UrlInput";

function Step2({ click }) {
  return (
    <div>
      <div
      style={{ textAlign: "center" }}
      >
        <p className="big-text">
          Let's set up a home for all your work
        </p>
        <p style={{ color: "#aaa", fontSize: "13px" }}>
          you can always create another workspace later.
        </p>
      </div>

      <div className="workspace" >
        <Input label="Workspace Name" type="text" placeholder="Eden" />
        {/* <Input label="Display Name" type="text" placeholder="Steve" /> */}
        <UrlInput url="www.eden.com/" label="Workspace URL" placeholder="Example"/>
      <BigButton click={click} text="Create Workspace" />
      </div>
    </div>
  );
}

export default Step2;
