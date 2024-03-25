import { Col, Row, Container, Stack } from 'react-bootstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PersonalStyles.css';
import CityView from '/Users/keziah/Developer/jessies_profile/src/components/NewCityView/NewCityView.js';


function Personal() {
    return (
        <>
            <div className="space"></div>

            <div style={{ paddingLeft: "12vw", paddingRight: "3vw" }}>
                <Row >
                    <Col md="5" className="d-flex align-items-center justify-content-center">
                        Nostra natoque ultricies augue. Justo lacinia molestie. Lacinia leo nonummy eget duis at mollis orci aliquet rhoncus nunc pretium. Tristique pede tempor dui lacus odio Facilisi ultrices sed morbi tempus dis cursus pulvinar laoreet cum consectetuer suscipit habitasse nibh montes ultrices.
                        Proin lobortis class nisi natoque vitae, ridiculus auctor felis blandit fusce proin. Ac nullam euismod nam ipsum ante dignissim integer, cubilia.
                        Augue luctus consectetuer rhoncus class tristique habitasse leo tortor natoque lorem netus eget elit arcu litora. Tellus leo laoreet commodo magnis nullam fringilla facilisis nec arcu nascetur vestibulum pretium faucibus rhoncus senectus torquent leo. Dui torquent purus integer.
                    </Col>

                    <Col md="7" xs="12" >


                    </Col>
                </Row>
                <div className="personal-divider"></div>
            </div>
            <div style={{ paddingLeft: "12vw", paddingRight: "3vw" }}>
                <Row >
                    <Col md="5" className="d-flex align-items-center justify-content-center">
                        Nostra natoque ultricies augue. Justo lacinia molestie. Lacinia leo nonummy eget duis at mollis orci aliquet rhoncus nunc pretium. Tristique pede tempor dui lacus odio Facilisi ultrices sed morbi tempus dis cursus pulvinar laoreet cum consectetuer suscipit habitasse nibh montes ultrices.
                        Proin lobortis class nisi natoque vitae, ridiculus auctor felis blandit fusce proin. Ac nullam euismod nam ipsum ante dignissim integer, cubilia.
                        Augue luctus consectetuer rhoncus class tristique habitasse leo tortor natoque lorem netus eget elit arcu litora. Tellus leo laoreet commodo magnis nullam fringilla facilisis nec arcu nascetur vestibulum pretium faucibus rhoncus senectus torquent leo. Dui torquent purus integer.
                    </Col>

                    <Col md="7" xs="12" >
                        <CityView />
                    </Col>
                </Row>
                <div className="personal-divider"></div>
            </div>

        </>
    )
}

export default Personal;