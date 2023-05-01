import React, { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import Step1 from "./Step1";
import Step2 from "./Step2";
import "./Game.scss";

const Game: React.FC = () => {
  const { step } = useContext(GameContext);

  return (
    <div>
      {step === "step 1" && <Step1 />}
      {step === "step 2" && <Step2 />}
    </div>
  );
};

export default Game;
