import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types'


const ProjectCard = (props) => {
    const { image, title, text } = props;
    return (
        <Card className="projectCard bg-light">
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
                <Button className="mx-3 viewSiteBtn btnTransition">Visit Site</Button>
                <Button className="viewSourceBtn btnTransition" variant="success"><i className="far fa-eye"></i> Source</Button>
            </Card.Body>
        </Card>
    )
}

ProjectCard.defaultProps = {
    image: "./underconst.jpeg"
}

ProjectCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default ProjectCard;