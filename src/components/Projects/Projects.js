import { Card } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import VideoCard from "../Card/VideoCard";
import ImageCard from "../Card/ImageCard";
import './ProjectsStyles.css';

function Projects() {

    const appetaizingVideo = "https://www.youtube.com/embed/anttS9XAs1Q";
    const vrGameVideo = "https://www.youtube.com/embed/qqLLywfQUu8";

    return (
        <>
            <div className="space"></div>
            <div style={{ paddingLeft: "12vw", paddingRight: "3vw" }}>
                <Row style={{minHeight: "30vh"}}>
                    <Col md="5" className="d-flex align-items-center justify-content-center">
                        
AppetAIzing revolutionizes recipe management by integrating advanced technologies. Utilizing Express and Node.js for seamless frontend-backend communication, the system also leverages a third-party AI API for quick recipe summarization and editing. With an intuitive React.js interface and optimized PostgreSQL database schema, AppetAIzing ensures efficient data handling. Integration with object storage services like AWS S3 enhances multimedia content storage, culminating in a streamlined and user-friendly recipe management experience.
                    </Col>

                    <Col md="7" xs="12">
                        <iframe
                            className="embed-responsive-item"
                            src={appetaizingVideo}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{ width: '100%', height: '100%' }}
                        ></iframe>
                    </Col>
                </Row>
                <div className="project-divider"></div>
            </div>
            <div style={{ paddingLeft: "12vw", paddingRight: "3vw" }}>
                <Row style={{minHeight: "30vh"}}>
                    <Col md="5" className="d-flex align-items-center justify-content-center">
                    In this project, I collaborated with a team of developers to create immersive virtual reality (VR) games, leveraging tools like GitLab for version control, branch management, and code reviews. Working closely with other software developers and UI/UX specialists, I ensured seamless gameplay and interactivity, contributing to a cohesive user experience. Additionally, I played a key role in enhancing game functionality by revising algorithms in C#, implementing new features, and updating existing ones, effectively improving the overall quality and engagement of the VR games.                    </Col>

                    <Col md="7" xs="12" >

                        <iframe
                            className="embed-responsive-item"
                            src={vrGameVideo}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{ width: '100%', height: '100%' }}
                        ></iframe>



                    </Col>
                </Row>
                <div className="project-divider"></div>
            </div>

        </>

    )
}
export default Projects;