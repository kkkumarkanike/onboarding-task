import React from "react";

function Usage({ icon, heading, text, active, changeActive, value }) {
  return (
    <div
      className={active === value ? "active-usage" :"usage"}
      onClick={changeActive}
    >
      {icon}
      <p className="usage-heading">
        {heading}
      </p>
      <p className="usage-text">
        {text}
      </p>
    </div>
  );
}

export default Usage;
