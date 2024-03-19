import { Col, Container, Row } from 'react-bootstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailIcon from "../../assets/email_icon.png"
import linkedInIcon from "../../assets/linkedin_icon.png"
import githubIcon from "../../assets/github_icon.png"
import pdfIcon from "../../assets/pdf_icon.png"
import resumeFile from "../../assets/JiaYiJian_Resume.pdf"

function LeftContact() {
    return (
        <> 
            <div className="contacts">
                <a href="mailto:jyjian2@gmail.com"><div className="icon"><img className="icon" src={emailIcon}></img></div></a>
                <a href="https://www.linkedin.com/in/jiayi-jian"><div className="icon"><img className="icon" src={linkedInIcon}></img></div></a>
                <a href="https://github.com/jyjian2"><div className="icon"><img className="icon" src={githubIcon}></img></div></a>
                <a href={resumeFile} download><div className="icon"><img className="icon" src={pdfIcon}></img></div></a>
            </div>
       



        </>
    )
}

export default LeftContact;