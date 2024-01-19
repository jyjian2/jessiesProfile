import '/Users/keziah/Developer/jessies_profile/src/components/CitySkyline/CitySkyline.styles.css'

function CitySkyline() {
    const profile = {
        name: "Jessie",
        imageUrl: '',
        selfIntro: 'Hi, I am Jessie, a Web Developer with 3+ years of experience creating user-friendly websites, proficient in a modern full-stack toolkit including HTML, CSS, JavaScript, Bootstrap, React, Node, Express, and MongoDB. Proven success collaborating with cross-functional teams, such as development, UI/UX, and management, to provide exceptional web solutions.'
    }

    return (
        <>
            <div>
                <h1>{profile.name}</h1>
                <img
                    src={profile.imageUrl}
                    alt={`${profile.name}'s profile picture`}
                ></img>
                {profile.selfIntro}
            </div>
            <div class="background-buildings sky">
                <div></div>
                <div></div>
                <div class="bb1 building-wrap">
                    <div class="bb1a bb1-window"></div>
                    <div class="bb1b bb1-window"></div>
                    <div class="bb1c bb1-window"></div>
                    <div class="bb1d"></div>
                </div>
                <div class="bb2">
                    <div class="bb2a"></div>
                    <div class="bb2b"></div>
                </div>
                <div class="bb3"></div>
                <div></div>
                <div class="bb4 building-wrap">
                    <div class="bb4a"></div>
                    <div class="bb4b"></div>
                    <div class="bb4c window-wrap">
                        <div class="bb4-window"></div>
                        <div class="bb4-window"></div>
                        <div class="bb4-window"></div>
                        <div class="bb4-window"></div>
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>

            <div class="foreground-buildings">
                <div></div>
                <div></div>
                <div class="fb1 building-wrap">
                    <div class="fb1a"></div>
                    <div class="fb1b"></div>
                    <div class="fb1c"></div>
                </div>
                <div class="fb2">
                    <div class="fb2a"></div>
                    <div class="fb2b window-wrap">
                        <div class="fb2-window"></div>
                        <div class="fb2-window"></div>
                        <div class="fb2-window"></div>
                    </div>
                </div>
                <div></div>
                <div class="fb3 building-wrap">
                    <div class="fb3a window-wrap">
                        <div class="fb3-window"></div>
                        <div class="fb3-window"></div>
                        <div class="fb3-window"></div>
                    </div>
                    <div class="fb3b"></div>
                    <div class="fb3a"></div>
                    <div class="fb3b"></div>
                </div>
                <div class="fb4">
                    <div class="fb4a"></div>
                    <div class="fb4b">
                        <div class="fb4-window"></div>
                        <div class="fb4-window"></div>
                        <div class="fb4-window"></div>
                        <div class="fb4-window"></div>
                        <div class="fb4-window"></div>
                        <div class="fb4-window"></div>
                    </div>
                </div>
                <div class="fb5"></div>
                <div class="fb6"></div>
                <div></div>
                <div></div>
            </div>
        </>
    )
}

export default CitySkyline;