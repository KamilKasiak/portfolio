import Loader from "react-loaders"
import React from "react"
import "./Portfolio.scss"
import AnimatedLetters from "./AnimatedLetters"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import Truck from "../assets/img/truck.png"
import Guardian from "../assets/img/guardian.png"
import portfolio from "../assets/img/portfolio.png"
import tindeer from "../assets/img/tindeer.png"

const Portfolio = () => {
    const portfolioArray = "Portfolio".split("")
    const [letterClass, setLetterClass] = useState("text-animate");

    useEffect(() => {
        setTimeout( () => {
            setLetterClass("text-animate-hover")
        },3000)
    },[])

    return (
        <div>
            <div className="container portfolio-page">
                <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={portfolioArray}
                        idx={15}
                    />
                    </h1>
                </div>
                <div className="portfolio-container">
                    <div className="portfolio-item">
                            <img src={Truck} alt="Truck-Track app"></img>
                        <div className="hover-item">
                            <h3>Truck-Track app</h3>
                                <p className="description">React, Node.js, Express.js, MongoDB</p>
                            <div className="icons">
                                <a href="https://github.com/KamilKasiak/Truck-Track" target="_blank" rel="noreferer">
                                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                                </a>
                                <a href="https://github.com/KamilKasiak/Truck-Track" target="_blank" rel="noreferer">
                                    <span className="material-symbols-outlined">language</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-item">
                        <img src={Guardian} alt="Guardian app"></img>
                        <div className="hover-item">
                            <h3>Guardian app</h3>
                            <p className="description">React, JavaScript, CSS3, HTML5</p>
                            <div className="icons">
                                <a href="https://github.com/KamilKasiak/Guardian-App" target="_blank" rel="noreferer">
                                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                                </a>
                                <a href="https://github.com/KamilKasiak/Guardian-App" target="_blank" rel="noreferer">
                                    <span className="material-symbols-outlined">language</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-item">
                        <img src={portfolio} alt="Web Portfolio site"></img>
                        <div className="hover-item">
                            <h3>Portfolio site</h3>
                            <p className="description">React, JavaScript, CSS3, SCSS, HTML5</p>
                            <div className="icons">
                                <a href="https://github.com/KamilKasiak/portfolio" target="_blank" rel="noreferer">
                                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                                </a>
                                <a href="https://github.com/KamilKasiak/portfolio" target="_blank" rel="noreferer">
                                    <span className="material-symbols-outlined">language</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-item">
                        <img src={tindeer} alt="Tindeer site"></img>
                        <div className="hover-item">
                            <h3>Tindeer site</h3>
                            <p className="description">Bootstrap, CSS3, HTML5</p>
                            <div className="icons">
                                <a href="https://github.com/KamilKasiak/Tindeer" target="_blank" rel="noreferer">
                                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                                </a>
                                <a href="https://github.com/KamilKasiak/Tindeer" target="_blank" rel="noreferer">
                                    <span className="material-symbols-outlined">language</span>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <Loader type="pacman" />
        </div>
    )
}


export default Portfolio