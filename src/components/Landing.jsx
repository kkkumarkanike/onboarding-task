import React, { useEffect, useState } from "react";
import Stepper from "react-stepper-horizontal";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import icon from "../icons/icon.png";

function Landing() {
  const [activeStep, setActiveStep] = useState(0);
  useEffect(() => {}, []);
  const handleStep = () =>{
       setActiveStep((prev) => prev + 1)
  }
  return (
    <div
      className="landing"
    >
      <div className="header">
        <img
          src={icon}
          alt="icon"
          width={30}
          height={30}
        />
        <h2 style={{marginLeft: "8px"}} className="big-text">Eden</h2>
      </div>
      <div className="stepper">
        <Stepper
          steps={[{ title: "" }, { title: "" }, { title: "" }, { title: "" }]}
          activeColor="#664DE5"
          completeColor="#664DE5"
          activeStep={activeStep}
          size={30}
          circleFontSize={12}
          completeBarColor="#664DE5"
        />
      </div>
      {activeStep === 0 ? <Step1 click={handleStep} /> : null}
      {activeStep === 1 ? <Step2 click={handleStep}/> : null}
      {activeStep === 2 ? <Step3 click={handleStep}/> : null}
      {activeStep === 3 ? <Step4 /> : null}
    </div>
  );
}

export default Landing;
