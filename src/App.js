import logo from './logo.svg';
import './App.css';

const profile = {
  name: "Jessie",
  imageUrl: '',
}


function App() {
  return (
    <>
        <h1>{profile.name}</h1>
        <img
        src={profile.imageUrl}
        alt={`${profile.name}'s profile picture`}
        ></img>
    </>
);
}

export default App;
