import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import Link from "../../atoms/Link.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../styles/global.css";
import "./Navbar.css";
import logoImage from "../../../images/TokSpot.png";

const NavigationBar = ({ links, linkText }) => {
  return (
    <Navbar
      expand="lg"
      className="default-shadow rounded-4 m-2 mx-4 px-3 fixed-top nav-glass"
    >
      <Navbar.Brand href="#">
        <img src={logoImage} alt="TokSpot CRM" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="mx-auto">
          {links.map((link, index) => (
            <Link key={index} to={link.to} className="me-4 on-hover-link">
              {link.label}
            </Link>
          ))}
        </Nav>
        <Link to="/login" className="btn-primary-color">
          {linkText}
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
