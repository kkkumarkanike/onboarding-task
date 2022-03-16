import React from "react";
import { Form, InputGroup, FormControl } from "react-bootstrap";

function UrlInput({ label, url, placeholder }) {
  return (
    <div style={{ marginTop: "5px" }}>
      <Form.Label
        htmlFor="basic-url"
        style={{
          textAlign: "left",
          fontSize: "13px",
          fontWeight: "bold",
          marginLeft: 0,
        }}
      >
        {label} <span style={{ color: "#aaa" }}>(optional)</span>
      </Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">{url}</InputGroup.Text>
        <FormControl
          id="basic-url"
          aria-describedby="basic-addon3"
          placeholder={placeholder}
        />
      </InputGroup>
    </div>
  );
}

export default UrlInput;
