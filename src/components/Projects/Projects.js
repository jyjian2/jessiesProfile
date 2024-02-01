import { Card } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import VideoCard from "../Card/VideoCard";
import ImageCard from "../Card/ImageCard";

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
        <Container>
            <Row>
                <Col class="col-md-6">
                    <VideoCard />
                </Col>
                <Col class="col-md-6">
                    <VideoCard />
                </Col>
            </Row>
            <Row>
                <Col class="col-md-6">
                    <ImageCard />
                </Col>
                <Col class="col-md-6">
                    <ImageCard />
                </Col>
            </Row>
        </Container>
    )
};

export default Projects;