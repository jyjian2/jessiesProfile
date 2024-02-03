import { Card } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import VideoCard from "../Card/VideoCard";
import ImageCard from "../Card/ImageCard";
import './ProjectsStyles.css';

function Projects() {
    console.log("???");

    const projects = [
        {
            id: "1",
            picture: '',
            name: "Buy it for life",
            description: "A Full Stack web applcation",
            tags: ["HTML", "CSS", "Bootstrap", "React.js", "Node.js", "Express.js", "MongoDB"]
        },
        {
            id: "4",
            picture: '',
            name: "To-do List",
            description: "Unknown",
            tags: ["HTML", "CSS", "Node.js"]
        },
        {
            id: "3",
            picture: '',
            name: "appetAIzing",
            description: "unknown",
            tags: ["HTML", "CSS", "Bootstrap", "React.js", "Node.js", "Express.js", "MongoDB"]
        },
        {
            id: "5",
            picture: '',
            name: "University of Illinois VR Lab Game",
            description: "Unknown",
            tags: ["C#", "Unity", "User Experience", "User Interface"]
        }
    ]

    return (
        <>
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <h1>Projects</h1>
                <div className="parent-container">
                    <Container className="">
                        <Row>
                            <Col md={6}>
                                <div className="projectGrid">
                                    <VideoCard />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="projectGrid">
                                    <VideoCard />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <div className="projectGrid">
                                    <ImageCard />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="projectGrid">
                                    <ImageCard />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

        </>
    );
};

export default Projects;