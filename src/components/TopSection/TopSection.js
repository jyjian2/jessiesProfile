import { Col, Container, Row } from 'react-bootstrap';
import "./TopSectionStyles.css"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function TopSection() {
    return (
        <>

            <div className="top-space"></div>

            <Row>
                <Col xs="12" md="6">
                    <a href="/">
                    <h1 className="name">Jessie Jian</h1>
                    <h4 className="title">Software Engineer</h4>
                    </a>
                </Col>
                <Col xs="12" md="6">

                    <Row className="nav-bar">
                        <Col s="2"><a href="resume"><h4 className="nav-item">Resume</h4></a></Col>
                        <Col s="2"><a href="/projects"><h4 className="nav-item">Projects</h4></a></Col>
                        <Col s="2"><a href="/personal"><h4 className="nav-item">Personal</h4></a></Col>
                    </Row>

                </Col>
            </Row>


            <div className="divider"></div>


        </>
    )
}

export default TopSection;