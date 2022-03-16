import React from "react";
import { Form } from "react-bootstrap";

function Input({ label, type, placeholder }) {
  return (
    <div style={{ marginTop: "5px" }}>
      <Form.Label
        htmlFor="inputPassword5"
        style={{ textAlign: "left", fontSize: "13px", fontWeight: "bold", marginLeft: 0 }}
      >
        {label}
      </Form.Label>
      <Form.Control
        type={type}
        id="textInput"
        aria-describedby="textInput"
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
