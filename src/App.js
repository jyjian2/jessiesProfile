import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.js'; 
import Layout from './components/Layout/Layout.js'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Resume from './components/Resume/Resume.js'; 
// import Projects from './components/Projects'; 
// import Personal from './components/Personal'; 

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="resume" element={<Resume />} />
      {/* <Route path="projects" element={<Projects />} />
      <Route path="personal" element={<Personal />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
