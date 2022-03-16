import React from "react";
import Input from "./Input";
import BigButton from "./Button";
import UrlInput from "./UrlInput";

function Step2({ click }) {
  return (
    <div>
      <div
      style={{ textAlign: "center" }}
        // style={{
        //   textAlign: "center",
        //   display: "flex",
        //   justifyContent: "center",
        //   alignItems: "center",
        //   flexDirection: "column"
        // }}
      >
        <p style={{ marginBottom: 0, width: "100%" }} className="big-text">
          Let's set up a home for all your work
        </p>
        <p style={{ color: "#aaa", fontSize: "13px" }}>
          you can always create another workspace later.
        </p>
      </div>

      <div style={{ width: "80%", marginTop: "3rem",marginLeft: "10%" }}>
        <Input label="Workspace Name" type="text" placeholder="Eden" />
        {/* <Input label="Display Name" type="text" placeholder="Steve" /> */}
        <UrlInput url="www.eden.com/" label="Workspace URL" placeholder="Example"/>
      <BigButton click={click} text="Create Workspace" />
      </div>
    </div>
  );
}

export default Step2;
