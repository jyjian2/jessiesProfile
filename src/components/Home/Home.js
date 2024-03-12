import ProfileImg from "../../assets/jyjian2Profile.jpg";
import "./HomeStyles.css"
import { Col, Row, Container } from 'react-bootstrap';

function Home() {
    return (
        <>

            <Row>
                <Col xs="12" md="6">
                    <h1 className="name">JIA-YI JIAN</h1>
                    <h4 className="title">Full Stack Engineer</h4>
                </Col>
                <Col xs="12" md="6">

                    <Row className="nav-bar">
                        <Col s="2"><a href="#/resume"><h4 className="nav-item">Resume</h4></a></Col>
                        <Col s="2"><a href="#/resume"><h4 className="nav-item">Projects</h4></a></Col>
                        <Col s="2"><a href="#/resume"><h4 className="nav-item">Personal</h4></a></Col>
                    </Row>

                </Col>

            </Row>




        </>

    )
}

export default Home;