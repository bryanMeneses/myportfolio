import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Card from './Card';
import './Projects.css';

const Projects = () => {
    return (
        <div id="projects" className="wow fadeIn cardsRespContainer bg-light">
            <Container className="py-4">
                <h2>My Work</h2>
                <hr className="hrStyle" />
                <h5 className="my-3">Please take a look around!</h5>
                <Row className="mt-4 justify-content-center text-dark">
                    <Col className="my-4" sm="12" lg="5" xl="6">
                        <Card
                            image={require("./travelogue.png")}
                            title="TraveLogue (Full Stack)"
                            text={`This website allows users to register their own accounts safely and customize their own profiles, utilizes JSON web tokens for authentication, and features a feed page where users can make posts and like/comment other users’ posts. Use demo@demo.com and password 12345 to sign in.`}
                            link="https://travelogue-bm.herokuapp.com"
                            sourceLink="https://github.com/bryanMeneses/travelogue"
                            apiSource="https://github.com/bryanMeneses/travelogue-api" />
                    </Col>
                    <Col className="my-4" sm="12" lg="6">
                        <Card
                            image={require("./photix.png")}
                            title='Photix'
                            text="Users can view an “infinite” collection of photos from Unsplash, touch on any photo to see specific details, and search for any photos they’d like."
                            link="http://photix.netlify.com"
                            sourceLink="https://github.com/bryanMeneses/photix" />
                    </Col>
                    <Col className="my-4" sm="12" lg="6">
                        <Card
                            image={require("./myportfolio.png")}
                            title="My Portfolio"
                            text="I created this website using React JS, Bootstrap 4."
                            link="#home"
                            sourceLink="https://github.com/bryanMeneses/myportfolio" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Projects;