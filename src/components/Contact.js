import "./Contact.scss"
import Loader from "react-loaders"
import AnimatedLetters from "./AnimatedLetters.js"
import { useEffect, useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { MapContainer } from "react-leaflet"
import { TileLayer, Marker, Popup } from "react-leaflet"



const Contact = () => {
    const contactArray = "Contact Me".split("")
    const [letterClass, setLetterClass] = useState("text-animate")
    const refForm = useRef()
    const emailjsKey = process.env.REACT_APP_EMAILJS_KEY
   
    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-hover")
        },3000)
    },[])

    const sendEmail = (event) => {
        event.preventDefault()

        emailjs
            .sendForm(
                "contact_service",
                "contact_form",
                refForm.current,
                emailjsKey
            )
            .then ( (result) => {
                alert("Message successfully sent!")
                window.location.replace("https://kasiakkamil.com/")
                
            }, () => {
                alert("Failed to send the message, please try again!")
            })  

    }

    return (
        <div>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={contactArray}
                            idx={15}
                        />
                    </h1>
                    <p>
                    I am looking for a role in IT company with the opportunity to work with
                    the latest technologies. If you need a website or application, don't hesitate to write to me :)
                    </p>
                    <div className="contact-form">
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                <input type="text" name="name" placeholder="Name" required />
                            </li>
                            <li className="half">
                                <input type="email" name="email" placeholder="Email" required />
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name="subject" required/>
                            </li>
                            <li>
                                <textarea placeholder="Message" name="message" required></textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND" />
                            </li>
                        </ul>
                    </form>
                    </div>
                </div>
            
            <div className="info-map">
                Kamil Kasiak-Bielecki
                <br />
                Switzerland, 4052 Basel
                <br />
                <span>kasiakkamil@gmail.com</span>
            </div>
            <div className="map">
                <MapContainer center={[47.55359284736058, 7.613617312222805]} zoom={15}>
                    <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
                        <Marker position={[47.55359284736058, 7.613617312222805]}>
                        <Popup>I am here :)</Popup>
                    </Marker>
                </MapContainer>

            </div>
        </div>
            <Loader type="pacman" />
        </div>
    )
}

export default Contact