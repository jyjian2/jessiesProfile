import logo from './logo.svg';
import './Root.css';
import NavBar from './components/NavBar/NavBar.js';
import { Outlet, Link } from 'react-router-dom';
import SelfIntroduction from './components/SelfIntroduction/SelfIntroduction';
import Projects from './components/Projects/Projects.js';
import GoldenGame from './components/goldenGame/goldenGame.js';
import Footer from './components/Footer/Footer.js';



function Root() {
  return (
    <>
      <div className="topViewPort">

        <NavBar />

        <section id="self-introduction">
          <SelfIntroduction />
        </section>
      </div>

      <div className='middleViewPort'>
        <section id="projects">
          <Projects />
        </section>
      </div>
      <div className='buttonViewPort'>
        <section id="goldenGame" className='game'>
          <GoldenGame />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </div>


    </>
  );
}

export default Root;
