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
        
                <Row className="picture-intro">
                   
                    <Col xs="8" md="5" className="picture">
                        <img src={ProfileImg} style={{ borderRadius: '50%', width: '40vw', height: 'auto' }}></img>
                    </Col>
                    <Col xs="12" md="5" className="intro"><p>Self Inttro. dfjdkgjfklgjlsgjlfdgjslfjglsjglf
                        ggslkfjgldjglfdgjlsjg'sgjldjgdlfgjsklfgj
                        slgjlfkjgdklfjgfkghjifgjodlfjgldfjgflkgj kfgjldgjlf ggslkfjgldjglfdgjlsjg
                        gjkfsldjglfkjdglfjgklfgjlfgjlfgjldjg</p></Col>
                </Row>
        








        </>

    )
}

export default Home;