import React, { useContext, useEffect, useState } from "react";
import Circle from "../Circle/Circle";
import { GameContext } from "../../context/GameContext";
import {
  paperProperties,
  rockProperties,
  scissorsProperties,
  scissorsBgColor,
  paperBgColor,
  rocksBgColor,
} from "../constants/constants";

interface Choice {
  background: string;
  icon: string;
}

const choices = [rockProperties, paperProperties, scissorsProperties];

function getRandomChoice(choices: Choice[]) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

const Step2: React.FC = () => {
  const { choosenCircle, setScore, score } = useContext(GameContext);
  const [houseCircle, setHouseCircle] = useState({
    background: "",
    icon: "",
  });
  const [result, setResult] = useState("");
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setHouseCircle(getRandomChoice(choices));
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (houseCircle.background !== "") {
        setShowResult(true);
        setResult(
          determineWinner(choosenCircle.background, houseCircle.background)
        );
      }
    }, 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [houseCircle]);

  const determineWinner = (playerChoice: string, houseChoice: string) => {
    if (playerChoice === houseChoice) {
      return "It's a Tie";
    } else if (
      (playerChoice === rocksBgColor && houseChoice === scissorsBgColor) ||
      (playerChoice === scissorsBgColor && houseChoice === paperBgColor) ||
      (playerChoice === paperBgColor && houseChoice === rocksBgColor)
    ) {
      setScore((prev) => prev + 1);
      return "YOU WIN!";
    } else {
      if (score > 0) {
        setScore((prev) => prev - 1);
      }

      return "YOU LOSE!";
    }
  };

  const handleClick = () => {
    localStorage.setItem("score", score.toString());
    window.location.reload();
  };

  return (
    <div className="game-step2">
      <div className="choosen">
        <h1>YOU PICKED</h1>
        <Circle circleProperties={choosenCircle} />
      </div>
      {showResult && (
        <div className="result">
          <h1>{result}</h1>
          <button onClick={handleClick}>PLAY AGAIN</button>
        </div>
      )}
      <div className="choosen">
        <h1>THE HOUSE PICKED</h1>
        {houseCircle.background === "" ? (
          <div className="empty-circle"></div>
        ) : (
          <Circle circleProperties={houseCircle} />
        )}
      </div>
    </div>
  );
};

export default Step2;
