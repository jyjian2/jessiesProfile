import { Col, Row, Container, Stack } from 'react-bootstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PersonalStyles.css';
import CitySkyline from "../CitySkyline/CitySkyline";
import GoldenGame from '../goldenGame/goldenGame';
import udemy from "../../assets/udemy.png"
import datastructure from "../../assets/dataStructure.png"
import strings from "../../assets/strings.png"
import toolbox from "../../assets/toolbox.png"
import graphs from "../../assets/graphs.png"
import VR from "../../assets/VR.png"
import python from "../../assets/python.png"

function Personal() {
    return (
        <>
            <div className="space"></div>

            <div style={{ paddingLeft: "12vw", paddingRight: "3vw"}}>
                <Row style={{minHeight: "30vh"}}>
                    <Col md="5" className="d-flex align-items-center justify-content-center">
                        I hold certifications in both Web Development Bootcamp and Data Structures and Algorithms, validating my expertise in these essential software development areas.<br></br>
                        The Web Development Bootcamp certification confirms my proficiency in modern web development technologies like HTML, CSS, JavaScript, and frameworks.<br></br>
                        Likewise, the Data Structures and Algorithms certification demonstrates my ability to design efficient algorithms and implement data structures for problem-solving.<br></br>
                        These certifications reflect my commitment to continuous learning and readiness to tackle diverse challenges in software engineering with confidence.<br></br>
                    </Col>

                    <Col md="7" xs="12" >
                        <Row style={{ paddingBottom: "1%" }}>
                            <Col><img src={udemy}></img></Col>
                            <Col><img src={datastructure}></img></Col>
                            <Col><img src={strings}></img></Col>
                            <Col><img src={toolbox}></img></Col>
                        </Row>
                        <Row>
                            <Col><img src={graphs}></img></Col>
                            <Col><img src={VR}></img></Col>
                            <Col><img src={python}></img></Col>
                            <Col></Col>
                        </Row>
                    </Col>
                </Row>
                <div className="personal-divider"></div>
            </div>
            <div style={{ paddingLeft: "12vw", paddingRight: "3vw"}}>
                <Row style={{minHeight: "30vh"}}>
                    <Col md="5" className="d-flex align-items-center justify-content-center">
                        I reside in the vibrant SF Bay Area, where the abundance of sunshine and plethora of outdoor activities perfectly complement my lifestyle. The dynamic environment, filled with tech talents and innovation, energizes me and ignites my passion to be actively involved in this thriving tech community.
                    </Col>

                    <Col md="7" xs="12">
                        <CitySkyline />
                    </Col>
                </Row>
                <div className="personal-divider"></div>
            </div>
            <div style={{ paddingLeft: "12vw", paddingRight: "3vw"}}>
                <Row style={{minHeight: "30vh"}}>
                    <Col md="5" className="d-flex align-items-center justify-content-center">
                    Meet Jasper, the tennis ball enthusiast! This lively pup adores tennis balls more than anything else in the world, as evidenced by the adorable picture of him holding three balls in his mouth simultaneously. With boundless energy and an unwavering love for playtime, Jasper brings endless joy and excitement to every moment.
                    </Col>

                    <Col md="7" xs="12" >
                        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                            <GoldenGame />
                        </div>


                    </Col>
                </Row>
                <div className="personal-divider"></div>
            </div>

        </>
    )
}

export default Personal;