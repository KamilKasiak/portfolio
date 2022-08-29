import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import LogoName from "../assets/img/logo-k.png"
import AnimatedLetters from "./AnimatedLetters"
import "./Home.scss"
import HomeLogo from "./HomeLogo.js"
import Loader from "react-loaders"

const Home = () => {
    const [letterClass, setLetterClass] = useState("text-animate")
    const nameArray = "amil".split("")
    const jobArray = "web developer.".split("")

    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-hover")
        }, 5000)
    },[])

    return (
        <div>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _11`}>i, </span>
                 <br />
                 <span className={`${letterClass} _12`}>I </span>
                 <span className={`${letterClass} _13`}>'m</span>
                <img src={LogoName} alt="developer" />
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={nameArray}
                idx={20} />
                <br />
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={jobArray}
                idx={30} />
                </h1>

                <h2> JavaScript Developer</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <HomeLogo />
        </div>
        <Loader type="pacman" />
        </div>
    )
}

export default Home