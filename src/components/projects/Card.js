import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types'


const ProjectCard = (props) => {
    const { image, title, text, link, sourceLink, apiSource } = props;
    return (
        <Card className="projectCard bg-light">
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
                {(link === '#home') ? null : (<a
                    target="_blank"
                    href={link}
                    rel="noopener noreferrer"
                    className="mx-2 viewSiteBtn">Visit Site</a>)}

                <a
                    href={sourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-2 viewSourceBtn"><i className="far fa-eye"></i>{" "}
                    Source
                </a>
                {apiSource ? (
                    <a
                        href={apiSource}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-2 viewSourceBtn">API
                </a>) :
                    null}
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