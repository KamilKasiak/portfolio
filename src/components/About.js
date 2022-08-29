import "./About.scss"
import AnimatedLetters from "./AnimatedLetters"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCss3, faHtml5, faReact, faJsSquare, faGithub, faNode} from "@fortawesome/free-brands-svg-icons"
import { Loader } from "react-loaders"

const About = () => {
    const [letterClass, setLetterClass] = useState("text-animate")
    const aboutArray = "About Me".split("")

    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-hover")
        }, 3000)
    },[])

    return (
        <div>
        <div className="container about-page">
            <div className="text-zone">
            <h1>
                <AnimatedLetters
                    letterClass={letterClass} 
                    strArray={aboutArray}
                    idx={15}
                />
                </h1>
                <p>
                    I am a man with a positive attitude to life and people, which results in high efficiency in
                    cooperation with employees of various levels and companies.
                </p>
                <p>
                    I am looking for a role in IT company with the opportunity to work with
                    the latest technologies.
                </p>
                <p>
                    In my career I have
                    learned to be creative in searching for new logistic and technical solutions. I am using
                    knowledge in the field of construction, electrical engineering and IT in practice. I used to
                    be asked not 'IF', but 'WHEN' :)
                </p>
            </div>

            <div className="stage-cube-container">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faGithub} color="#000" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faNode} color="#6FA661" />
                    </div>

                </div>
            </div>
        </div>
        <Loader type="pacman"/>
        </div>
    )
}

export default About