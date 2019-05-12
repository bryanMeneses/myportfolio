import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Card from './Card';
import './Projects.css';

const Projects = () => {
    return (
        <div className="bg-dark">
            <Container className="py-4 text-light">
                <h2>My Work</h2>
                <hr className="hrStyle" />
                <h5 className="my-3">Please take a look around!</h5>
                <Row className="mt-4 justify-content-center text-dark">
                    <Col className="my-4" sm="12" lg="5" xl="4">
                        <Card
                            image={require("./pic.jpeg")}
                            title="Card 1"
                            text="Fiiling this text section with random words to take up space for the sake of appearance" />
                    </Col>
                    <Col className="my-4" sm="12" lg="5" xl="4">
                        <Card
                            image={require("./pic.jpeg")}
                            title='Card 2'
                            text="Fiiling this text section with random words to take up space for the sake of appearance" />
                    </Col>
                    <Col className="my-4" sm="12" lg="5" xl="4">
                        <Card
                            image={require("./pic.jpeg")}
                            title="Card 3"
                            text="Fiiling this text section with random words to take up space for the sake of appearance" />
                    </Col>

                </Row>
            </Container>
        </div>
    )
}
export default Projects;