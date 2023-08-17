import logo from './logo.svg';
import './Root.css';
import NavBar from './components/NavBar/NavBar.js';
import { Outlet, Link } from 'react-router-dom';
import SelfIntroduction from './components/SelfIntroduction/SelfIntroduction';



function Root() {
  return (
    <>
        <header>
          <NavBar />
        </header>
        <section id="self-introduction">
          <SelfIntroduction />
        </section>
        <div id="content-portion">
          <Outlet />
        </div>

    </>
);
}

export default Root;
