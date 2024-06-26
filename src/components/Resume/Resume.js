import "./ResumeStyles.css"
import { Col, Row, Container, Stack } from 'react-bootstrap';
import { Link } from "react-router-dom";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';
import Footer from "../Footer/Footer.js";

function Resume() {
    return (
        <>

            <div className="space"></div>
            <div className="resume-wrap">

                <Row>
                    <Col md="2" className="d-flex align-items-center justify-content-center">08-2019 - 05-2021</Col>
                    <Col></Col>
                    <Col md="8" xs="12" style={{ textAlign: 'center' }}>
                        <div style={{ display: 'block' }}>Master of Science in Information Management</div>
                        <div style={{ display: 'block' }}>University of Illinois at Urbana Champaign Champaign</div>
                        <div style={{ display: 'block' }}>GPA: 3.83/4.00</div>
                    </Col>
                </Row>
                <div className="resume-divider"></div>
                <Row>
                    <Col md="2" className="d-flex align-items-center justify-content-center">05-2022 - 01-2023</Col>
                    <Col></Col>
                    <Col md="8" xs="12" style={{ textAlign: 'center' }}>
                        <div>The Complete 2024 Web Development Bootcamp</div>
                        <div>Udemy</div>
                    </Col>
                </Row>
                <div className="resume-divider"></div>
                <Row >
                    <Col md="2" className="d-flex align-items-center justify-content-center">
                        <p>09.2023 - 12.2023</p>
                    </Col>

                    <Col className="d-flex align-items-center justify-content-center">
                        <div direction="vertical" gap={4}>
                            <Badge pill bg="primary">HTML</Badge>
                            <Badge pill bg="primary">CSS</Badge>
                            <Badge pill bg="primary">JQuery</Badge>
                            <Badge pill bg="primary">JavaScript</Badge>
                            <Badge pill bg="primary">React.js</Badge>
                            <Badge pill bg="primary">Node.js</Badge>
                            <Badge pill bg="primary">Express.js</Badge>
                            <Badge pill bg="primary">RESTful</Badge>
                            <Badge pill bg="primary">APIs</Badge>
                            <Badge pill bg="info">Github</Badge>
                            <Badge pill bg="info">PostgreSQL</Badge>
                            <Badge pill bg="info">JSON</Badge>
                            <Badge pill bg="light" text="dark">UI</Badge>
                            <Badge pill bg="light" text="dark">Figma</Badge>
                            <Badge pill bg="light" text="dark">Collaboration</Badge>
                        </div>
                    </Col>

                    <Col md="8" xs="12" >
                        <ul>
                            <p>AppetAIzing: An AI-powered recipe summerization system</p>
                            <li>Utilized Express and Node.js to create RESTful APIs facilitating seamless frontend-backend communication</li>
                            <li>Consumed a 3rd party AI API to summarize recipes from users' provided URL and enable users to edit further details</li>
                            <li>Applied React.js, React Router, Custom Hook, Class Components to create a clear user interface</li>
                            <li>Designed database schema for a relational DBMS, e.g., PostgreSQL</li>
                            <li>Leveraged object storage such as AWS S3 to persist image files</li>
                        </ul>
                    </Col>
                    <div className="resume-divider"></div>
                </Row>
                <Row >
                    <Col md="2" className="d-flex align-items-center justify-content-center">
                        <p>06.2023 - 09.2023</p>
                    </Col>
                    <Col className="d-flex align-items-center justify-content-center">
                        <div direction="vertical" gap={4}>
                            <Badge pill bg="primary">HTML</Badge>
                            <Badge pill bg="primary">CSS</Badge>
                            <Badge pill bg="primary">JavaScript</Badge>
                            <Badge pill bg="primary">React.js</Badge>
                            <Badge pill bg="primary">Express.js</Badge>
                            <Badge pill bg="primary">Bootstrap</Badge>
                            <Badge pill bg="info">Github</Badge>
                            <Badge pill bg="info">MongoDB</Badge>
                            <Badge pill bg="info">JSON</Badge>
                            <Badge pill bg="light" text="dark">UnitTest</Badge>
                        </div>
                    </Col>

                    <Col md="8" xs="12" >
                        <ul>
                            <p>ManageYourDay: A to-do list application</p>
                            <li>Thoroughly unit tested its code for ensuring high quality</li>
                            <li>Implemented user authentication and authorization to establish the legitimacy of user credentials and access</li>
                            <li>Containerized the application and deployed to a cloud hosted platform</li>
                        </ul>
                    </Col>
                    <div className="resume-divider"></div>
                </Row>
                <Row >

                    <Col className="d-flex align-items-center justify-content-center">01.2023 - 04.2023</Col>
                    <Col md="2" className="d-flex align-items-center justify-content-center">
                        <div direction="vertical" gap={4}>
                            <Badge pill bg="primary">HTML</Badge>
                            <Badge pill bg="primary">CSS</Badge>
                            <Badge pill bg="primary">JQuery</Badge>
                            <Badge pill bg="primary">JavaScript</Badge>
                            <Badge pill bg="primary">React.js</Badge>
                            <Badge pill bg="primary">Express.js</Badge>
                            <Badge pill bg="primary">Bootstrap</Badge>
                            <Badge pill bg="info">Github</Badge>
                            <Badge pill bg="info">MongoDB</Badge>
                            <Badge pill bg="info">JSON</Badge>
                            <Badge pill bg="light" text="dark">Mobile-First Design</Badge>
                        </div>
                    </Col>
                    <Col md="8" xs="12" >
                        <ul>
                            <p>Buy It for Life: An E-commerce Website</p>
                            <li>Designed with a Mobile-First Responsive Design to ensure an engaging user experience across various devices</li>
                            <li>Leveraged technologies such as HTML5, CSS3, Bootstrap, and React to efficiently manage client-side interactions</li>
                            <li>Incorporated RESTful APIs for executing data creation, retrieval, updating, and deletion from the MongoDB database</li>
                        </ul>
                    </Col>
                    <div className="resume-divider"></div>
                </Row>
                <Row >

                    <Col className="d-flex align-items-center justify-content-center">09.2021 - 04.2022</Col>
                    <Col md="2" className="d-flex align-items-center justify-content-center">
                        <div direction="vertical" gap={4}>
                            <Badge pill bg="primary">Java</Badge>
                            <Badge pill bg="primary">Spring</Badge>
                            <Badge pill bg="primary">JQuery</Badge>
                            <Badge pill bg="primary">RESTful</Badge>
                            <Badge pill bg="primary">APIs</Badge>
                            <Badge pill bg="info">Git</Badge>
                            <Badge pill bg="info">MySQL</Badge>
                            <Badge pill bg="info">Oracle</Badge>
                            <Badge pill bg="info">MongoDB</Badge>

                        </div>
                    </Col>
                    <Col md="8" xs="12" >
                        <ul>
                            <p>Software Developer @Beshton Software Inc., San Jose, CA, USA</p>
                            <li>Constructed a social platform, employing skills such as developing RESTful APIs with Java Spring Boot</li>
                            <li>Design, develop, and maintain Java-based applications using Java EE, Spring Framework, Hibernate</li>
                            <li>Integrated Java apps with relational databases (MySQL, PostgreSQL, Oracle) and/or NoSQL databases (MongoDB)</li>
                        </ul>
                    </Col>
                    <div className="resume-divider"></div>
                </Row>
                <Row >

                    <Col className="d-flex align-items-center justify-content-center">08.2020 - 06.2021</Col>
                    <Col md="2" className="d-flex align-items-center justify-content-center">
                        <div direction="vertical" gap={4}>
                            <Badge pill bg="primary">C#</Badge>
                            <Badge pill bg="primary">Unity</Badge>
                            <Badge pill bg="info">GitLab</Badge>
                            <Badge pill bg="light" text="dark">UI</Badge>
                            <Badge pill bg="light" text="dark">UX</Badge>
                            <Badge pill bg="light" text="dark">Collaboration</Badge>
                        </div>
                    </Col>
                    <Col md="8" xs="12" >
                        <ul>
                            <p>Software Developer @University of Illinois at Urbana Champaign Virtual Reality Lab, Champaign, IL, USA </p>
                            <li>Developed immersive VR games with other developers, utilizing GitLab, branch management, and code reviews</li>
                            <li>Collaborated with other software developers and UI/UX specialists to ensure seamless gameplay and interactivity</li>
                            <li>Revised algorithms in C# to implement new features or update existing ones for VR games effectively</li>

                        </ul>
                    </Col>
                    <div className="resume-divider"></div>
                </Row>
                <Row >

                    <Col className="d-flex align-items-center justify-content-center">02.2018 - 06.2019</Col>
                    <Col md="2" className="d-flex align-items-center justify-content-center">
                        <div direction="vertical" gap={4}>
                            <Badge pill bg="primary">HTML</Badge>
                            <Badge pill bg="info">SQL Server</Badge>
                            <Badge pill bg="info">Tableau</Badge>
                            <Badge pill bg="light" text="dark">UI</Badge>
                            <Badge pill bg="light" text="dark">UX</Badge>
                            <Badge pill bg="light" text="dark">Leadership</Badge>
                            <Badge pill bg="light" text="dark">JIRA</Badge>
                            <Badge pill bg="light" text="dark">Agile</Badge>
                            <Badge pill bg="light" text="dark">Scrum</Badge>
                            <Badge pill bg="light" text="dark">Project Management</Badge>
                        </div>

                    </Col>
                    <Col md="8" xs="12" >
                        <ul>
                            <p>Business Analyst @Digital Forest Technologies, Taipei, Taiwan</p>
                            <li>Led projects that revamped a new B2B ticketing system, accommodating 200+ engineers and 100+ clients</li>
                            <li>Developed Tableau business intelligence reports to help engineers track the resolution time of their issue tickets</li>
                            <li>Assisted the development team in SQL Server migration with SQL query writing and execution for data validation</li>
                            <li>Collaborated with cross-functional teams to resolve system errors, leading to a 50% increase in user satisfaction</li>


                        </ul>
                    </Col>
                    <div className="resume-divider"></div>
                </Row>
                <Row >

                    <Col className="d-flex align-items-center justify-content-center">06.2016 - 07.2017</Col>
                    <Col md="2" className="d-flex align-items-center justify-content-center">
                        <div direction="vertical" gap={4}>
                            <Badge pill bg="light" text="dark">Communication</Badge>
                            <Badge pill bg="light" text="dark">MS Excel</Badge>
                        </div>

                    </Col>
                    <Col md="8" xs="12" >
                        <ul>
                            <p>Marketing Assistant @Microsoft, Taipei, Taiwan</p>
                            <li>Teamed up with different teams to execute 15+ marketing campaigns, achieving a 30% YoY increase in sales value</li>
                        </ul>
                    </Col>
                </Row>
            </div>
            {/* <Footer /> */}











        </>

    )
}

export default Resume;