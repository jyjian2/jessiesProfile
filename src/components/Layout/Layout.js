import React from 'react';
import { Outlet } from 'react-router-dom';
import TopSection from '../TopSection/TopSection.js'; // Import your fixed component
import 'bootstrap/dist/css/bootstrap.min.css';
import LeftContact from '../LeftContact/LeftContact.js';
import { Col, Row, Container } from 'react-bootstrap';

function Layout() {
  return (
    <div>
      <header>
        <TopSection />
      </header>
      <main>
        <Container>
          <Row>
            <Col xs="4" md="2">
              <LeftContact />
            </Col>
            <Col xs="12" md="10">
              <Outlet />
            </Col>

          </Row>

        </Container>




      </main>
    </div>

  );
}

export default Layout;
