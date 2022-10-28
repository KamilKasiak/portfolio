import Loader from 'react-loaders'
import React from 'react'
import './Portfolio.scss'
import AnimatedLetters from './AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Truck from '../assets/img/truck.png'
import portfolio from '../assets/img/portfolio.png'
import tindeer from '../assets/img/tindeer.png'
import carChain from '../assets/img/car-chain.png'
import blog from '../assets/img/blog.png'
import site from '../assets/img/site.png'

const Portfolio = () => {
  const portfolioArray = 'Portfolio'.split('')
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <div>
      <div className="container portfolio-page">
        <div className="text-zone conntact-text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={portfolioArray}
              idx={15}
            />
          </h1>
          <div className="portfolio-list">
            <ul>
              <li>
                <a href="#car-chain">Blockchain Application</a>
              </li>
              <li>
                <a href="#truck">MERN Application</a>
              </li>
              <li>
                <a href="#blog">Next.js, GraphQL, Tailwind CSS</a>
              </li>
              <li>
                <a href="#portfolio">React Portfolio</a>
              </li>
              <li>
                <a href="#tindeer">Bootstrap app</a>
              </li>
              <li>
                <a href="#site">Single page website</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="portfolio-container">
          <div className="portfolio-item" id="car-chain">
            <img src={carChain} alt="Blockchain Car Rental"></img>
            <div className="hover-item">
              <div className="hover-item-content">
                <h3>Blockchain Car Rental</h3>
                <p className="description">
                  Use power of smart contracts to create decentralized car
                  rental company.
                </p>
                <ul>
                  <li>
                    Rent a car after depositing small amount of eth to contract
                    address
                  </li>
                  <li>
                    After pick up a car timer will start count how long you use
                    car before drop off (based on block timestamp)
                  </li>
                  <li>
                    You can't rent another car before you drop off this one
                  </li>
                  <li>After drop off, application will calculate due</li>
                  <li>From now you can pay due whenever you want</li>
                  <li>
                    You can't withdraw money or even pick up another car before
                    you drop off car and repay due
                  </li>
                </ul>
                <pre className="technologies">
                  Technology used:
                  <br />
                  <p>Solidity, HardHat, React, Redux, Ethers.js, SASS</p>
                </pre>
                <div className="icons">
                  <a
                    href="https://github.com/KamilKasiak/Blockchain-Car-Rental"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                  </a>
                  <a
                    href="https://car-chain.kasiakkamil.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="material-symbols-outlined">language</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio-item" id="truck">
            <img src={Truck} alt="Truck-Track app"></img>
            <div className="hover-item truck">
              <div className="hover-item-content">
                <h3>Application for truck drivers</h3>
                <p className="description">
                  Use MERN stack to create application for drivers to store they
                  daily trips
                </p>
                <ul>
                  <li>Create account to store your personal routes</li>
                  <li>Add the route, date and initial mileage</li>
                  <li>
                    Fill in the end date and mileage after completing the trip
                  </li>
                  <li>
                    Application will calculate your total daily millage and work
                    time
                  </li>
                  <li>
                    Only displays necessery information, details are displayed
                    when pressed
                  </li>
                </ul>
                <pre className="technologies">
                  Technology used:
                  <br />
                  <p>React, Node.js, Express.js, MongoDB, JWT</p>
                </pre>

                <div className="icons">
                  <a
                    href="https://github.com/KamilKasiak/Truck-Track"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                  </a>
                  <a
                    href="http://truck-track.kasiakkamil.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="material-symbols-outlined">language</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio-item" id="blog">
            <img src={blog} alt="Travel Blog"></img>
            <div className="hover-item">
              <div className="hover-item-content">
                <h3>Travel Blog</h3>
                <p className="description">
                  Blog connected with Hygraph CMS for good user experiance
                </p>
                <pre className="technologies">
                  Technology used:
                  <br />
                  <p>
                    Next.js, React, GraphQL, Tailwind CSS, GraphCMS(Hygraph),
                    Stripe
                  </p>
                </pre>
                <div className="icons">
                  <a
                    href="https://github.com/KamilKasiak/Blog"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                  </a>
                  <a
                    href="https://urlopaktywnie.pl/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="material-symbols-outlined">language</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio-item" id="portfolio">
            <img src={portfolio} alt="Web Portfolio site"></img>
            <div className="hover-item">
              <div className="hover-item-content">
                <h3>Portfolio site</h3>
                <p className="description">
                  Personal site containing portfolio, leaflet map and contact me
                  form
                </p>
                <pre className="technologies">
                  Technology used:
                  <br />
                  <p>React, JavaScript, CSS3, SASS, EmiailJs, HTML5</p>
                </pre>
                <div className="icons">
                  <a
                    href="https://github.com/KamilKasiak/portfolio"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                  </a>
                  <a
                    href="https://kasiakkamil.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="material-symbols-outlined">language</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio-item" id="tindeer">
            <img src={tindeer} alt="Tindeer site"></img>
            <div className="hover-item">
              <div className="hover-item-content">
                <h3>Single page site</h3>
                <p className="description">
                  Single page website created with bootstrap and css
                </p>
                <pre className="technologies">
                  Technology used:
                  <br />
                  <p>Bootstrap, CSS3, HTML5</p>
                </pre>

                <div className="icons">
                  <a
                    href="https://github.com/KamilKasiak/Tindeer"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio-item" id="site">
            <img src={site} alt="Rent house site"></img>
            <div className="hover-item">
              <div className="hover-item-content">
                <h3>Single page renting website</h3>
                <p className="description">
                  Single page website created for house renting. Canvas
                  animation create title effect like in Stripe homepage.
                </p>
                <pre className="technologies">
                  Technology used:
                  <br />
                  <p>React, SASS, HTML5, GSAP</p>
                </pre>

                <div className="icons">
                  <a
                    href="https://github.com/KamilKasiak/SasinoWebpage"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                  </a>
                </div>
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
