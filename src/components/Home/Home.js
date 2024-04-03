import ProfileImg from "../../assets/jyjian2Profile.jpg";
import "./HomeStyles.css"
import { Col, Row, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LeftContact from "../LeftContact/LeftContact";

function Home() {
    return (
        <>

            <div className="space"></div>
            <div className="home-wrap">
                <Row className="picture-intro" style={{minHeight: "50vh"}}>
                    <Col className="picture">
                        <img src={ProfileImg} style={{ borderRadius: '50%', width: '40vw', height: 'auto' }}></img>
                    </Col>
                    <Col md="8" xs="12" className="intro">
                        <ul className="home-checklist">
                            <li>3+ years experience in web development, specializing in JavaScript, HTML/CSS, and Git</li>
                            <li>Skilled in building robust web applications using frameworks such as React.js and Node.js</li>
                            <li>Proficient in database management with PostgreSQL, MySQL, and MongoDB</li>
                            <li>Excels in creating intuitive UIs and optimizing performance for engaging UXs</li>
                            <li>Experienced in project management tools like JIRA and design tools like Figma</li>
                            <li>Proven record software development, including AI recipe management and e-commerce solutions</li>
                            <li>MS in Information Management from the University of Illinois at Urbana-Champaign</li>
                            <li>US Permanent Resident. No sponsorship needed</li>
                        </ul>
                    </Col>
                </Row>
            </div>










        </>

    )
}

export default Home;