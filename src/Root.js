import logo from './logo.svg';
import './Root.css';
import NavBar from './components/NavBar/NavBar.js';
import { Outlet, Link } from 'react-router-dom';
import SelfIntroduction from './components/SelfIntroduction/SelfIntroduction';
import Projects from './components/Projects/Projects.js';



function Root() {
  return (
    <>
        <header>
          <NavBar />
        </header>
        <section id="self-introduction">
          <SelfIntroduction />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="littleGame">

        </section>

    </>
);
}

export default Root;
