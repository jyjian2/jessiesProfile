import { Card } from "react-bootstrap";
import {Container, Row, Col} from "react-bootstrap";

function Projects() {
    console.log("???");

    const projects = [
        {
            id:"1",
            picture: '',
            name: "Buy it for life",
            description: "A Full Stack web applcation",
            tags: ["HTML", "CSS", "Bootstrap", "React.js", "Node.js","Express.js", "MongoDB" ]
        },
        {
            id:"4",
            picture: '',
            name: "To-do List",
            description: "Unknown",
            tags: ["HTML", "CSS", "Node.js"]
        },
        {
            id:"3",
            picture: '',
            name: "appetAIzing",
            description: "unknown",
            tags: ["HTML", "CSS", "Bootstrap", "React.js", "Node.js","Express.js", "MongoDB"]
        },
        {
            id:"5",
            picture: '',
            name: "University of Illinois VR Lab Game",
            description: "Unknown",
            tags: ["C#", "Unity", "User Experience", "User Interface"]
        }
    ]

    return (
        <Container>
            <Row>
                <Col class="col-md-6">P1</Col>
                <Col class="col-md-6">P2</Col>
            </Row>
            <Row>
                <Col class="col-md-6">P3</Col>
                <Col class="col-md-6">P4</Col>
            </Row>
        </Container>
    )
};

export default Projects;