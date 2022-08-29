import { Link, NavLink } from "react-router-dom"
import "./Sidebar.scss"
import LogoK from "../assets/img/logo-k.png"
import LogoPrefix from "../assets/img/logo-prefix.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faUser, faEnvelope, faFolderOpen, faBars, faClose } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { useState } from "react"


const Sidebar = () => {
    const [showNav, setShowNav] = useState(false)

    return (
        <div className="nav-bar">
            <Link className="logo" to="/">
                <img src={LogoK} alt="logo" />
                <img className="prefix-logo" src={LogoPrefix} alt="kasiak" />
            </Link>
        
            <nav className={showNav ? "mobile-show" : ""}>
                <NavLink exact="true" onClick={() => {setShowNav(false)}} activeclassname="active" className="home-link" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4d" />
                </NavLink>
                <NavLink onClick={() => {setShowNav(false)}} activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4d" />
                </NavLink>
                <NavLink onClick={() => {setShowNav(false)}} activeclassname="active" className="portfolio-link" to="/portfolio">
                    <FontAwesomeIcon icon={faFolderOpen} color="#4d4d4d" />
                </NavLink>
                <NavLink 
                onClick={() => {setShowNav(false)}}
                activeclassname="active" 
                className="contact-link" 
                to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4d" />
                </NavLink>  
                <FontAwesomeIcon icon={faClose} color="#4d4d4d" size="3x" className="close-icon"
                    onClick={() => {setShowNav(false)}}
                />          
            </nav>
                <ul>
                    <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/KamilKasiak" >
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>  
                    </li>
                    <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/KamilKasiak" >
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>  
                    </li>
                </ul>
            <FontAwesomeIcon
            onClick={() => {setShowNav(true)}}
            icon={faBars}
            color="#ffd700"
            size="3x"
            className="hamburger-icon" />

        </div>
    )
}

export default Sidebar