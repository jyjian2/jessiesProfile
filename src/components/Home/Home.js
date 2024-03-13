import ProfileImg from "../../assets/jyjian2Profile.jpg";
import emailIcon from "../../assets/email_icon.png"
import LinkedInIcon from "../../assets/linkedin_icon.png"
import githubIcon from "../../assets/github_icon.png"
import pdfIcon from "../../assets/pdf_icon.png"
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
            <div className="space"></div>
            <Row className="picture-intro">
                <Col md="2">
                    <div className="contacts" style={{marginLeft: "4vw", height: "50vh", width: "8vw", backgroundColor: "black"}}>
                        <img src={emailIcon}></img>
                        <img src={LinkedInIcon}></img>
                        <img src={githubIcon}></img>
                        <img src={pdfIcon}></img>
                    </div>
                </Col>
                <Col md="5" className="picture">
                    <img src={ProfileImg} style={{borderRadius: '50%', width: '30vw', height: 'auto'}}></img>
                </Col>
                <Col md="5" className="intro"><p>Self Inttro. dfjdkgjfklgjlsgjlfdgjslfjglsjglf
                ggslkfjgldjglfdgjlsjg'sgjldjgdlfgjsklfgj
                slgjlfkjgdklfjgfkghjifgjodlfjgldfjgflkgj kfgjldgjlf ggslkfjgldjglfdgjlsjg
                gjkfsldjglfkjdglfjgklfgjlfgjlfgjldjg</p></Col>
            </Row>
            <Row>

            </Row>
            <div className="space"></div>




        </>

    )
}

export default Home;