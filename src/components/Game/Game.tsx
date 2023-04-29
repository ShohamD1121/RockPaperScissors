import React, { useContext, useState } from "react";
import Circle from "../Circle/Circle";
import {
  rockProperties,
  paperProperties,
  scissorsProperties,
} from "../constants/constants";
import "./Game.scss";
import { GameContext } from "../../context/GameContext";
import Step1 from "./Step1";
import Step2 from "./Step2";

const Game: React.FC = () => {
  const { step, nextStep } = useContext(GameContext);

  return (
    <div>
      {step === "step 1" && <Step1 />}
      {step === "step 2" && <Step2 />}
    </div>
  );
};

export default Game;
