import React from "react";

import { Button as BootstrapButton } from "react-bootstrap";

const Button = ({ children, ...props }) => {
  return <BootstrapButton {...props}>{children}</BootstrapButton>;
};
export default Button;
