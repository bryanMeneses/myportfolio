import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Card from './Card';
import './Projects.css';

const Projects = () => {
    return (
        <div id="projects" className="cardsRespContainer bg-dark">
            <Container className="py-4 text-light">
                <h2>My Work</h2>
                <hr className="hrStyle" />
                <h5 className="my-3">Please take a look around!</h5>
                <Row className="mt-4 justify-content-center text-dark">
                    <Col className="my-4" sm="12" lg="5" xl="4">
                        <Card
                            image={require("./myportfolio.png")}
                            title="My Portfolio"
                            text="I created this website using React JS, Bootstrap 4."
                            link="#home"
                            sourceLink="https://github.com/bryanMeneses/myportfolio" />
                    </Col>
                    <Col className="my-4" sm="12" lg="5" xl="4">
                        <Card
                            image={require("./photix.png")}
                            title='Photix'
                            text="Fiiling this text section with random words to take up space for the sake of appearance"
                            link="http://photix.netlify.com"
                            sourceLink="https://github.com/bryanMeneses/photix" />
                    </Col>
                    {/* <Col className="my-4" sm="12" lg="5" xl="4">
                        <Card
                            image={require("./pic.jpeg")}
                            title="Card 3"
                            text="Fiiling this text section with random words to take up space for the sake of appearance" />
                    </Col> */}

                </Row>
            </Container>
        </div>
    )
}
export default Projects;