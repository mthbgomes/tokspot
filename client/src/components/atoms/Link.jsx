import React from "react";
import { Link as RouterLink } from "react-router-dom";

const Link = ({ children, ...props }) => {
  return <RouterLink {...props}>{children}</RouterLink>;
};

export default Link;
