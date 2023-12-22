import React from "react";
import { Form } from "react-bootstrap";
export default function Checkbox({ controlId, label, ...props }) {
  return (
    <div>
      <Form.Check type="checkbox" id={controlId} {...props} />
      <Form.Label htmlFor={controlId}>{label}</Form.Label>
    </div>
  );
}
