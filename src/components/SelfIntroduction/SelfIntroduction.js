import CitySkyline from "../CitySkyline/CitySkyline";
import ProfileImg from "../../assets/jyjian2Profile.jpg";

function SelfIntroduction() {
    const profile = {
        name: "Jessie",
        imageUrl: ProfileImg,
        selfIntro: 'Hi, I am Jessie, a Web Developer with 3+ years of experience creating user-friendly websites, proficient in a modern full-stack toolkit including HTML, CSS, JavaScript, Bootstrap, React, Node, Express, and MongoDB. Proven success collaborating with cross-functional teams, such as development, UI/UX, and management, to provide exceptional web solutions.'
    }

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <CitySkyline />
            <div style={{ position: 'relative', width: '100%', height: '100%', textAlign: 'center' }}>
                <h1>{profile.name}</h1>
                <img
                    src={profile.imageUrl} // Use profile.imageUrl as the source
                    alt={`${profile.name}'s profile picture`}
                    style={{borderRadius: '50%', width: '15vw', height: 'auto'}}
                ></img>
                <p>{profile.selfIntro}</p>
            </div>
        </div>
    )
}

export default SelfIntroduction;