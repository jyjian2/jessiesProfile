import ProfileImg from "../../assets/jyjian2Profile.jpg";
import emailIcon from "../../assets/email_icon.png"
import linkedInIcon from "../../assets/linkedin_icon.png"
import githubIcon from "../../assets/github_icon.png"
import pdfIcon from "../../assets/pdf_icon.png"
import resumeFile from "../../assets/JiaYiJian_Resume.pdf"
import "./HomeStyles.css"
import { Col, Row, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <div className="space"></div>
            <Row className="picture-intro">
                <Col xs="4" md="2">
                    <div className="contacts">
                            <a href="mailto:jyjian2@gmail.com"><div className="icon"><img className="icon" src={emailIcon}></img></div></a>
                            <a href="https://www.linkedin.com/in/jiayi-jian"><div className="icon"><img className="icon" src={linkedInIcon}></img></div></a>
                            <a href="https://github.com/jyjian2"><div className="icon"><img className="icon" src={githubIcon}></img></div></a>
                            <a  href={resumeFile} download><div className="icon"><img className="icon" src={pdfIcon}></img></div></a>
                    </div>
                </Col>
                <Col xs="8" md="5" className="picture">
                    <img src={ProfileImg} style={{ borderRadius: '50%', width: '40vw', height: 'auto' }}></img>
                </Col>
                <Col xs="12" md="5" className="intro"><p>Self Inttro. dfjdkgjfklgjlsgjlfdgjslfjglsjglf
                    ggslkfjgldjglfdgjlsjg'sgjldjgdlfgjsklfgj
                    slgjlfkjgdklfjgfkghjifgjodlfjgldfjgflkgj kfgjldgjlf ggslkfjgldjglfdgjlsjg
                    gjkfsldjglfkjdglfjgklfgjlfgjlfgjldjg</p></Col>
            </Row>
            <Row>

            </Row>
            <div className="space"></div>
            <div className="divider"></div>
            <div className="copyright"><p>© 2024 By Jia-Yi Jian.</p></div>




        </>

    )
}

export default Home;