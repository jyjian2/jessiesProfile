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
                <Row className="picture-intro">
                    <Col className="picture">
                        <img src={ProfileImg} style={{ borderRadius: '50%', width: '40vw', height: 'auto' }}></img>
                    </Col>
                    <Col md="7" xs="12" className="intro">
                        <ul>
                            <li>Experienced web developer, specializing in JavaScript, HTML/CSS, and Git.</li>
                            <li>Skilled in building robust web applications using frameworks such as React.js and Node.js.</li>
                            <li>Proficient in database management with PostgreSQL, MySQL, and MongoDB.</li>
                            <li>Excels in creating intuitive user interfaces and optimizing performance for engaging user experiences.</li>
                            <li>Experienced in project management tools like JIRA and design tools like Figma.</li>
                            <li>Proven track record delivering high-quality software, including AI recipe management and e-commerce solutions</li>
                            <li>Completed a Master of Science in Information Management from the University of Illinois at Urbana-Champaign.</li>
                            <li>Greencard holder, don't need sponsordhip</li>
                        </ul>
                    </Col>
                </Row>
            </div>










        </>

    )
}

export default Home;