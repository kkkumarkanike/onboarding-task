import React from "react";
import success from "./../icons/success.png";
import BigButton from "./Button";

function Step4() {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img src={success} alt="success" width={70} height={70} style={{marginBottom: "3rem"}} />

        <p
          style={{ marginBottom: 0, width: "100%", textAlign: "center" }}
          className="big-text"
        >
          Congratulations, Eden!
        </p>
        <p style={{ color: "#aaa", fontSize: "13px" }}>
          You have completed onboarding, you can start using the Eden!
        </p>
      </div>

      <div style={{ width: "80%", marginTop: "1rem", marginLeft: "10%" }}>
        <BigButton text="Launch Eden"/>
      </div>
    </div>
  );
}

export default Step4;
