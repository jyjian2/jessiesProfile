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
                    <Col md="6" xs="12" className="intro"><p>Self Inttro. dfjdkgjfklgjlsgjlfdgjslfjglsjglf
                        ggslkfjgldjglfdgjlsjg'sgjldjgdlfgjsklfgj
                        slgjlfkjgdklfjgfkghjifgjodlfjgldfjgflkgj kfgjldgjlf ggslkfjgldjglfdgjlsjg
                        gjkfsldjglfkjdglfjgklfgjlfgjlfgjldjg</p>
                    </Col>
                </Row>
                <Row className="picture-intro">
                    <Col className="picture">
                        <img src={ProfileImg} style={{ borderRadius: '50%', width: '40vw', height: 'auto' }}></img>
                    </Col>
                    <Col md="6" xs="12" className="intro"><p>Self Inttro. dfjdkgjfklgjlsgjlfdgjslfjglsjglf
                        ggslkfjgldjglfdgjlsjg'sgjldjgdlfgjsklfgj
                        slgjlfkjgdklfjgfkghjifgjodlfjgldfjgflkgj kfgjldgjlf ggslkfjgldjglfdgjlsjg
                        gjkfsldjglfkjdglfjgklfgjlfgjlfgjldjg</p>
                    </Col>
                </Row>
                <Row className="picture-intro">
                    <Col className="picture">
                        <img src={ProfileImg} style={{ borderRadius: '50%', width: '40vw', height: 'auto' }}></img>
                    </Col>
                    <Col md="6" xs="12" className="intro"><p>Self Inttro. dfjdkgjfklgjlsgjlfdgjslfjglsjglf
                        ggslkfjgldjglfdgjlsjg'sgjldjgdlfgjsklfgj
                        slgjlfkjgdklfjgfkghjifgjodlfjgldfjgflkgj kfgjldgjlf ggslkfjgldjglfdgjlsjg
                        gjkfsldjglfkjdglfjgklfgjlfgjlfgjldjg</p>
                    </Col>
                </Row>
            </div>










        </>

    )
}

export default Home;