import React, { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import "./Header.scss";

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
        <p>SCORE</p>
        <span>{score}</span>
      </div>
    </div>
  );
};

export default Header;
