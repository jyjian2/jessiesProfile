import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.js'; 
import Layout from './components/Layout/Layout.js'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Resume from './components/Resume/Resume.js'; 
import Projects from './components/Projects/Projects.js'; 
import Personal from './components/Personal/Personal.js'; 

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/personal" element={<Personal />} />
      <Route path="/projects" element={<Projects />} />
      </Route>
    </Routes>
  );
}

export default App;
