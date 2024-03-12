import ProfileImg from "../../assets/jyjian2Profile.jpg";
import "./HomeStyles.css"

function Home() {
    return (
        <>
            <div>
                <h1>JIA-YI JIAN</h1>
                <h4>Full Stack Engineer</h4>
            </div>
            <div className="nav-bar">
                <nav>
                    <ul>
                        <li><a href="#/resume"><p>Resume</p></a></li>
                        <li><a href="#/resume"><p>Projects</p></a></li>
                        <li><a href="#/resume"><p>Personal</p></a></li>
                    </ul>
                </nav>
            </div>



        </>
    )
}

export default Home;