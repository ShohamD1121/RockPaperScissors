import React, { useContext } from "react";
import "./Header.scss";
import { GameContext } from "../../context/GameContext";

const Header: React.FC = () => {
  const { score } = useContext(GameContext);

  return (
    <div className="header">
      <div>
        <h1>
          ROCK
          <br />
          PAPER
          <br />
          SCISSORS
        </h1>
      </div>
      <div className="header_score">
        <p className="header_score">SCORE</p>
        <span>{score}</span>
      </div>
    </div>
  );
};

export default Header;
