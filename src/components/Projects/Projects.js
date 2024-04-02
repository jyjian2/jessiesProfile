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
                <Row >
                    <Col md="5" className="d-flex align-items-center justify-content-center">
                        Nostra natoque ultricies augue. Justo lacinia molestie. Lacinia leo nonummy eget duis at mollis orci aliquet rhoncus nunc pretium. Tristique pede tempor dui lacus odio Facilisi ultrices sed morbi tempus dis cursus pulvinar laoreet cum consectetuer suscipit habitasse nibh montes ultrices.
                        Proin lobortis class nisi natoque vitae, ridiculus auctor felis blandit fusce proin. Ac nullam euismod nam ipsum ante dignissim integer, cubilia.
                        Augue luctus consectetuer rhoncus class tristique habitasse leo tortor natoque lorem netus eget elit arcu litora. Tellus leo laoreet commodo magnis nullam fringilla facilisis nec arcu nascetur vestibulum pretium faucibus rhoncus senectus torquent leo. Dui torquent purus integer.
                    </Col>

                    <Col md="7" xs="12">
                        <VideoCard video={appetaizingVideo} />
                    </Col>
                </Row>
                <div className="project-divider"></div>
            </div>
            <div style={{ paddingLeft: "12vw", paddingRight: "3vw" }}>
                <Row >
                    <Col md="5" className="d-flex align-items-center justify-content-center">
                        Nostra natoque ultricies augue. Justo lacinia molestie. Lacinia leo nonummy eget duis at mollis orci aliquet rhoncus nunc pretium. Tristique pede tempor dui lacus odio Facilisi ultrices sed morbi tempus dis cursus pulvinar laoreet cum consectetuer suscipit habitasse nibh montes ultrices.
                        Proin lobortis class nisi natoque vitae, ridiculus auctor felis blandit fusce proin. Ac nullam euismod nam ipsum ante dignissim integer, cubilia.
                        Augue luctus consectetuer rhoncus class tristique habitasse leo tortor natoque lorem netus eget elit arcu litora. Tellus leo laoreet commodo magnis nullam fringilla facilisis nec arcu nascetur vestibulum pretium faucibus rhoncus senectus torquent leo. Dui torquent purus integer.
                    </Col>

                    <Col md="7" xs="12" >
                        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                        <VideoCard video={vrGameVideo}/>
                        </div>


                    </Col>
                </Row>
                <div className="project-divider"></div>
            </div>

        </>

    )
}
export default Projects;