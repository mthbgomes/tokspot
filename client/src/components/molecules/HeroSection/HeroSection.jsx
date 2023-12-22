import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import heroImage from "../../../images/hero-img.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../styles/global.css";
import "./HeroSection.css";

export default function HeroSection({ heroTitle, heroText, heroCTA }) {
  return (
    <section className="hero vh-100 d-flex align-items-center" id="#">
      <Container>
        <Row className="justify-content-between align-items-stretch">
          <Col md={4} className="d-flex flex-column justify-content-evenly">
            <div className="hero-title">
              <h1 className="fw-bold">{heroTitle}</h1>
            </div>
            <div className="hero-text">
              <h2>{heroText}</h2>
            </div>
            <a href="/cadastro" className="btn-primary-color mb-2">
              {heroCTA}
            </a>
          </Col>
          <Col md={6}>
            <img src={heroImage} alt="" className="hero-img rounded-4" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
