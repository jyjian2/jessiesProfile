import React from 'react';
import { Outlet } from 'react-router-dom';
import TopSection from '../TopSection/TopSection.js'; // Import your fixed component
import 'bootstrap/dist/css/bootstrap.min.css';
import LeftContact from '../LeftContact/LeftContact.js';
import { Col, Row, Container } from 'react-bootstrap';
import Footer from '../Footer/Footer.js';
import './LayoutStyles.css';


function Layout() {
  return (
    <div>
      <header>
        <TopSection />
      </header>
      <main>
          <LeftContact />
          <Outlet />
       
      </main>
      {/* <footer className='footer'>
        <Footer />
      </footer> */}
    </div>

  );
}

export default Layout;
