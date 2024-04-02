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
                        Nostra natoque ultricies augue. Justo lacinia molestie. Lacinia leo nonummy eget duis at mollis orci aliquet rhoncus nunc pretium. Tristique pede tempor dui lacus odio Facilisi ultrices sed morbi tempus dis cursus pulvinar laoreet cum consectetuer suscipit habitasse nibh montes ultrices.
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
                        Nostra natoque ultricies augue. Justo lacinia molestie. Lacinia leo nonummy eget duis at mollis orci aliquet rhoncus nunc pretium. Tristique pede tempor dui lacus odio Facilisi ultrices sed morbi tempus dis cursus pulvinar laoreet cum consectetuer suscipit habitasse nibh montes ultrices.
                    </Col>

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