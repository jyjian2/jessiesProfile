import React from 'react';
import { Outlet } from 'react-router-dom';
import TopSection from '../TopSection/TopSection.js'; // Import your fixed component
import 'bootstrap/dist/css/bootstrap.min.css';

function Layout() {
  return (
    <React.Fragment>
      <div>
      <header>
        <TopSection />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
    </React.Fragment>
    
  );
}

export default Layout;
