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
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <h1>Projects</h1>
                <div className="parent-container">
                    <Container className="">
                        <Row>
                            <Col md={6}>
                                <div className="projectGrid">
                                    <VideoCard video={appetaizingVideo}/>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="projectGrid">
                                    <VideoCard video={vrGameVideo}/>
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