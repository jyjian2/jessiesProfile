import { Card } from "react-bootstrap";

function Projects(){

    const projectsList = [
        {
            id:"1",
            picture: '',
            name: "Buy it for life",
            description: "A Full Stack web applcation",
            tag: ["HTML", "CSS", "Bootstrap", "React.js", "Node.js","Express.js", "MongoDB" ]
        },
        {
            id:"2",
            picture: '',
            name: "ID Photo Generator",
            description: "An website that for user to generate a qualified ID photo. I am responsible for the Frontend design and make it responsible for different viewports",
            tag: ["HTML", "CSS", "Bootstrap" ]
        },
        {
            id:"3",
            picture: '',
            name: "Unknown",
            description: "unknown",
            tag: ["HTML", "CSS", "Bootstrap", "React.js", "Node.js","Express.js", "MongoDB"]
        },
        {
            id:"4",
            picture: '',
            name: "To-do List",
            description: "Unknown",
            tag: ["HTML", "CSS", "Node.js"]
        },
        {
            id:"5",
            picture: '',
            name: "University of Illinois VR Lab Game",
            description: "Unknown",
            tag: ["C#", "Unity", "User Experience", "User Interface"]
        },
        {
            id:"6",
            picture: '',
            name: "InstaFood",
            description: "A full-stack website merging Instagram's friend-following features with Yelp's restaurant search capabilities",
            tag: ["HTML", "CSS", "Bootstrap", "React.js", "Node.js","Express.js", "MongoDB"]
        }

    ]

    return (
    <>
    <div id="project-cards">

    </div>
    </>
    )
}

export default Projects;