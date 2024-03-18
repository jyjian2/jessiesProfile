import logo from './logo.svg';
import './Root.css';
import NavBar from './components/NavBar/NavBar.js';
import { Outlet, Link } from 'react-router-dom';
import SelfIntroduction from './components/SelfIntroduction/SelfIntroduction';
import Projects from './components/Projects/Projects.js';
import GoldenGame from './components/goldenGame/goldenGame.js';
import Footer from './components/Footer/Footer.js';
import CitySkyline from './components/CitySkyline/CitySkyline.js';
import Home from './components/Home/Home.js';
import Resume from './components/Resume/Resume.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function Root() {
  return (
    
      <Routes>
        <Route
        element={<Home />}
        path="/"
        /> 
        <Route
        element={<Resume />}
        path="/resume"
        /> 
      </Routes>
    
  );
}

export default Root;
