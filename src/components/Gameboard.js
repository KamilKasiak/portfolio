import Loader from "react-loaders";
import "./Gameboard.scss";
import AnimatedLetters from "./AnimatedLetters.js";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Gameboard = () => {
  const gameboardArray = "Game Board".split("");
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <div className="container gameboard-page">
      <div className="left">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={gameboardArray}
              idx={15}
            />
          </h1>
        </div>
        <div className="Leaderboard"></div>
      </div>

      <div className="right">
        <div className="title-section">
          <h2 id="level-title" class="level">
            Follow the sequence <br /> Press Any Key To Start
          </h2>
        </div>

        <Container className="gameContainer">
          <Row>
            <Col>
              <button
                type="button"
                id="green"
                className="green gameButton"
              ></button>
            </Col>
            <Col>
              <button
                type="button"
                id="red"
                className="red gameButton"
              ></button>
            </Col>
          </Row>
          <Row>
            <Col>
              <button
                type="button"
                id="yellow"
                className="yellow gameButton"
              ></button>
            </Col>
            <Col>
              <button
                type="button"
                id="blue"
                className="blue gameButton"
              ></button>
            </Col>
          </Row>
        </Container>
      </div>
      <Loader type="pacman" />
    </div>
  );
};

export default Gameboard;
