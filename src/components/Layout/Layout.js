import React from 'react';
import { Outlet } from 'react-router-dom';
import TopSection from '../TopSection/TopSection.js'; // Import your fixed component

function Layout() {
  return (
    <div>
      <header>
        <TopSection />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
