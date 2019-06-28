import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import './Footer.css';


const Footer = () => {
    return (
        <div id="contact" className="footerRespContainer py-4 bg-light footer text-dark">
            <Container>
                <h2>Let's get in touch</h2>
                <hr className="hrStyle" style={{ borderBottom: '4px double rgb(52, 58, 64)' }} />
                <h5>I'm interested in collaborating!</h5>
                <br />
                <Row className="socials  justify-content-center">
                    <Col className="my-2" xs="12" md="5">
                        <h4>Contact Me</h4>
                        <p>t: <a href="tel:+17146234843">714-623-4843</a></p>
                        <p>e: <a href="mailto:menesesbe93@gmail.com"> MenesesBE93@gmail.com</a></p>
                    </Col>
                    <Col className="my-2" xs="12" md="5">
                        <h4>Social</h4>
                        <a
                            title="Link to my LinkedIn"
                            href="https://www.linkedin.com/in/bryan-meneses-00999b12a/"
                            rel="noopener noreferrer"
                            target="_blank">
                            <i className="fab fa-linkedin-in btnTransition mr-4" />
                        </a>
                        <a
                            title="Link to my GitHub"
                            href="https://github.com/bryanMeneses"
                            rel="noopener noreferrer"
                            target="_blank">
                            <i className="fab fa-github-alt btnTransition" />
                        </a>
                    </Col>
                </Row>

            </Container>
        </div >
    )
}


export default Footer;