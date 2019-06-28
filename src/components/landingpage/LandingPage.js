import React, { Component } from "react";
import { Container, Col, Image, Button } from "react-bootstrap/";
import "./LandingPage.css";
import pic from "./pic.jpg";

class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      btnSize: ""
    };
  }

  updateDimensions = () => {
    if (window.innerWidth >= 783) {
      this.setState({ btnSize: "lg" });
    } else {
      this.setState({ btnSize: "md" });
    }
  };

  componentDidMount() {
    window.addEventListener("load", this.updateDimensions);
    window.addEventListener("resize", this.updateDimensions);
  }

  render() {
    let { btnSize } = this.state;
    return (
      <div className="bg-dark text-light" style={{ paddingTop: '56px' }}>
        <Container className="py-5">
          <Col sm="12">
            <div className="css-typing">
              <h1>Hello, I'm Bryan Meneses</h1>
              <h1>Full-Stack Web Developer</h1>
            </div>
          </Col>
          <Col sm="12">
            <Image
              src={pic}
              width="150px"
              className="rounded-circle my-3 respImg"
            />
          </Col>
          <Col>
            <div className="socials">
              <a
                href="https://www.linkedin.com/in/bryan-meneses-00999b12a/"
                rel="noopener noreferrer"
                target="_blank">
                <i className="fab fa-linkedin-in btnTransition" />
              </a>
              <a
                href="https://github.com/bryanMeneses"
                rel="noopener noreferrer"
                target="_blank">
                <i className="fab fa-github-alt btnTransition" />
              </a>
              <a
                href="mailto:Menesesbe93@gmail.com">
                <i className="far fa-envelope btnTransition"></i>
              </a>
            </div>
          </Col>

          <Button href="#projects" className="custom-Btn my-3 btnTransition" size={btnSize}>
            See My Work
          </Button>
        </Container>
      </div>
    );
  }
}

export default LandingPage;
