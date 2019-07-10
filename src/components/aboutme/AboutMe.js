import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div id='aboutme' className="wow fadeIn aboutRespContainer bg-light">
      <Container className="py-4">
        <h2>About Me</h2>
        <hr className="hrStyle" />
        <h5 className="my-3">How developing became one of my greatest interests.</h5>
        <Row className="my-4 justify-content-around">
          <Col className="myCard" sm="10" md="6" lg="3">
            <i className="goldText far fa-grin-beam display-3" />
            <h3>Personal</h3>
            <p>
              My name is Bryan, an accounting graduate who is trying to
              find a new path in life.
            </p>
            <p>
              Web development resonated both with my creative and logical sides.
            </p>
          </Col>
          <Col className="myCard1" sm="10" md="6" lg="3">
            <i className="goldText fas fa-school display-3" />
            <h3>Education</h3>
            <p>
              I received my Bachelor's Degree in Business/Accounting from
              California State University, Fullerton in January 2019.
            </p>
          </Col>

          <Col className="myCard" sm="10" md="6" lg="3">
            <i className="goldText fas fa-flag display-3" />
            <h3>Interests</h3>
            <p>
              I love a variety of things! Piano, singing, photography,
              traveling, learning languages, gaming, coffee, and of course,
              programming!
                </p>
            <p>
              * If we share any of these interests, I would love to connect!
            </p>
          </Col>
          <Col className="myCard2" sm="10" md="6" lg="3">
            <i className="goldText fas fa-long-arrow-alt-right display-3" />
            <h3>Future</h3>
            <p>
              I want to devote my career life to programming and web
              development. "Senior Web Developer" is what I aim to be called in the long-run.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutMe;
