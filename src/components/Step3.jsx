import React, { useState } from "react";
import BigButton from "./Button";
import Usage from "./Usage";
import { HiUserGroup } from "react-icons/hi";
import { BsPersonFill } from "react-icons/bs";

function Step3({ click }) {
  const [activeBlock, setActiveBlock] = useState("");
  return (
    <div>
      <div
        style={{ textAlign: "center" }}
      >
        <p className="big-text">
          How are you planning to use Eden?
        </p>
        <p style={{ color: "#aaa", fontSize: "13px" }}>
          We'll streamline your setup experience accordingly.
        </p>
      </div>

      <div style={{ width: "80%", marginTop: "1rem", marginLeft: "10%" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Usage
            icon={<BsPersonFill size={20}/>}
            heading="For myself"
            text="Write better. Think more clearly. Stay organized."
            value="user"
            active={activeBlock}
            changeActive={() => setActiveBlock("user")}
          />
          <Usage
            icon={<HiUserGroup size={20}/>}
            heading="With my team"
            text="Wikis, docs, tasks & projects, all in one place."
            value="team"
            active={activeBlock}
            changeActive={() => setActiveBlock("team")}
          />
        </div>
        <BigButton click={click} text="Create Workspace" />
      </div>
    </div>
  );
}

export default Step3;
