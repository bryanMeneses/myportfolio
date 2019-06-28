import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import './Skill.css'


const Skills = () => {
  return (
    <Container id="skills" className="skillsRespContainer py-4">
      <h2>Technologies I Know</h2>
      <hr className="hrStyle" />
      <h5 className="my-3">Need something specific? No problem!</h5>
      <Row className="my-4 justify-content-center">
        <Col className="skillsContainer" sm="12" md="6">
          <div className="circleBase type1">
            <i className="fas fa-laptop-code centerIcon"></i>
          </div>
          <h3 className="my-4">Front-End</h3>
          <Row className="justify-content-center text-muted">
            <Col xs="4" md="4">
              <i className="fab fa-html5 skillIconSize text-primary"></i>
              <p>HTML 5</p>
            </Col>
            <Col xs="4" md="4">
              <i className="fab fa-css3-alt skillIconSize" style={{ color: 'orange' }} ></i>
              <p>CSS 3</p>
            </Col>
            <Col xs="4" md="12" lg="4">
              <i className="fab fa-js-square skillIconSize text-warning"></i>
              <p>JavaScript</p>
            </Col>
            <Col xs="4">
              <i className="fab fa-bootstrap skillIconSize" style={{ color: 'purple' }}></i>
              <p>Bootstrap 4</p>
            </Col>
            <Col xs="4">
              <i className="fab fa-react skillIconSize" style={{ color: 'teal' }} ></i>
              <p>React/Redux</p>
            </Col>
          </Row>
        </Col>
        <Col className="skillsCard" sm="12" md="6">
          <div className="circleBase type1">
            <i className="fas fa-tools centerIcon"></i>
          </div>
          <h3 className="my-4">Back-End</h3>
          <Row className="justify-content-center text-muted">
            <Col xs="4" md="5">
              <i className="fab fa-node skillIconSize text-success"></i>
              <p>Node</p>
            </Col>
            <Col xs="4" md="5">
              <i className="fas fa-server skillIconSize text-dark"></i>
              <p>Express</p>
            </Col>
            <Col xs="4" md="6">
              <i className="fas fa-database skillIconSize" style={{ color: "rgb(49, 93, 139" }}></i>
              <p>PostgreSQL</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Skills;
