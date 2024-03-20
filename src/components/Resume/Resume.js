import "./ResumeStyles.css"
import { Col, Row, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Resume() {
    return (
        <>

            <div className="space"></div>
            <div className="resume-wrap">
                <Row >

                    <Col className="d-flex align-items-center">skills</Col>
                    <Col md="2" className="d-flex align-items-center">
                        <p>09.2023-12.2023</p>
                    </Col>
                    <Col md="8" xs="12" >
                        <ul>
                            <p>AppetAIzing: An AI-powered recipe summerization system</p>
                            <li>Utilized Express and Node.js to create RESTful APIs facilitating for seamless frontend-backend communication</li>
                            <li>Consumed a 3rd party AI API to summarize recipes from users' provide URL and enable users to edit further details</li>
                            <li>Applied React.js, React Router, Custom Hook, class Components to create a clear user interface</li>
                            <li>Designed database schema for a relational DBMS, e.g., PostgreSQL</li>
                            <li>Leveraged object storage such as AWS S3 to persist image files</li>
                        </ul>
                    </Col>
                    <div className="divider"></div>
                </Row>
                <Row >

                    <Col className="d-flex align-items-center">skills</Col>
                    <Col md="2" className="d-flex align-items-center">
                        <p>06.2023-09.2023</p>
                    </Col>
                    <Col md="8" xs="12" >
                        <ul>
                            <p>ManageYourDay: A to-do list application</p>
                            <li>Used React and Express.js to implement end to end CRUD functionalities</li>
                            <li>Thoroughly Unit tested its code for ensure high quality (using jest)</li>
                            <li>Implemented user authentication and authorization to establish the legitimacy of user credentials and access
                            </li>
                        </ul>
                    </Col>
                    <div className="divider"></div>
                </Row>
                <Row >

                    <Col className="d-flex align-items-center">skills</Col>
                    <Col md="2" className="d-flex align-items-center">
                        <p>01.2023-04.2023</p>
                    </Col>
                    <Col md="8" xs="12" >
                        <ul>
                            <p>Buy It for Life: An E-commerce Website</p>
                            <li>Designed with a responsive and intuitive user interface to ensure a engaging user experience across various devices</li>
                            <li>Leveraged technologies such as HTML5, CSS3, Bootstrap, and React to efficiently manage client-side interactions</li>
                            <li>Incorporated RESTful APIs for executing data creation, retrieval, updating, and deletion from the MongoDB database</li>
                        </ul>
                    </Col>
                    <div className="divider"></div>
                </Row>
                <Row >

                    <Col className="d-flex align-items-center">skills</Col>
                    <Col md="2" className="d-flex align-items-center">
                        <p>09-2021 - 04-2022</p>
                    </Col>
                    <Col md="8" xs="12" >
                        <ul>
                            <p>Software Developer @Beshton Software Inc., San Jose, CA, USA</p>
                            <li>Constructed a social platform, employing skills such as developing RESTful APIs with Java Spring Boot</li>
                        </ul>
                    </Col>
                    <div className="divider"></div>
                </Row>
                <Row >

                    <Col className="d-flex align-items-center">skills</Col>
                    <Col md="2" className="d-flex align-items-center">
                        <p>08-2020 - 06-2021</p>
                    </Col>
                    <Col md="8" xs="12" >
                        <ul>
                            <p>Software Developer @University of Illinois at Urbana Champaign Virtual Reality Lab, Champaign, IL, USA </p>
                            <li>Developed immersive VR games with other developers, utilizing GitLab, branch management, and code reviews</li>
                            <li>Collaborated with UI/UX specialists to create user-friendly games featuring seamless gameplay and interactivity</li>
                            <li>Devised algorithms in C# to implement new features or update existing ones for VR games effectively</li>

                        </ul>
                    </Col>
                    <div className="divider"></div>
                </Row>
                <Row >

                    <Col className="d-flex align-items-center">skills</Col>
                    <Col md="2" className="d-flex align-items-center">
                        <p>02-2018 - 06-2019</p>

                    </Col>
                    <Col md="8" xs="12" >
                        <ul>
                            <p>Business Analyst @Digital Forest Technologies, Taipei, Taiwan</p>
                            <li>Managed projects that revamped a new B2B ticketing system, accommodating 200+ engineers and 100+ clients</li>
                            <li>Developed Tableau business intelligence reports to help engineers track the resolution time of their issue tickets</li>
                            <li>Assisted the development team in SQL Server migration with SQL query writing and execution for data validation</li>
                            <li>Collaborated with cross-functional teams to resolve system errors, leading to a 50% increase in user satisfaction</li>

                        </ul>
                    </Col>
                    <div className="divider"></div>
                </Row>
                <Row >

                    <Col className="d-flex align-items-center">skills</Col>
                    <Col md="2" className="d-flex align-items-center">
                        <p> 06-2016 - 07-2017</p>

                    </Col>
                    <Col md="8" xs="12" >
                        <ul>
                            <p>Marketing Assistant @Microsoft, Taipei, Taiwan</p>
                            <li>Teamed up with different teams to execute 15+ marketing campaigns, achieving a 30% YoY increase in sales value</li>
                        </ul>
                    </Col>
                </Row>
            </div>










        </>

    )
}

export default Resume;