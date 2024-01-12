function SelfIntroduction() {
    const profile = {
        name: "Jessie",
        imageUrl: '',
        selfIntro: 'Hi, I am Jessie, a Web Developer with 3+ years of experience creating user-friendly websites, proficient in a modern full-stack toolkit including HTML, CSS, JavaScript, Bootstrap, React, Node, Express, and MongoDB. Proven success collaborating with cross-functional teams, such as development, UI/UX, and management, to provide exceptional web solutions.'
    }

    return (<div>
        <h1>{profile.name}</h1>
        <img
            src={profile.imageUrl}
            alt={`${profile.name}'s profile picture`}
        ></img>
        {profile.selfIntro}
    </div>)
}

export default SelfIntroduction;