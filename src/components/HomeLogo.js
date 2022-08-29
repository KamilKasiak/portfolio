import "./HomeLogo.scss"
import profile from "../assets/img/profile.png"

const HomeLogo = () => {

    return(
        <div className="elipseContainer" >
            <div className="elipse thin">
            <img className="image" src={profile} alt="Kamil"/>
            </div>
            <div className="elipse thick"></div>
            <div className="elipse yellow"></div>
            
        </div>
    )
 
}

export default HomeLogo