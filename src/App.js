import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar.js';

const profile = {
  name: "Jessie",
  imageUrl: '',
  selfIntro: 'Hi, I am Jessie, a Web Developer with 3+ years of experience creating user-friendly websites, proficient in a modern full-stack toolkit including HTML, CSS, JavaScript, Bootstrap, React, Node, Express, and MongoDB. Proven success collaborating with cross-functional teams, such as development, UI/UX, and management, to provide exceptional web solutions.'
}


function App() {
  console.log("app");
  return (
    <>
        <header>
          <NavBar />
        </header>
        <h1>{profile.name}</h1>
        <img
        src={profile.imageUrl}
        alt={`${profile.name}'s profile picture`}
        ></img>
        <p>{profile.selfIntro}</p>
    </>
);
}

export default App;
