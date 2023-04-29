import React, { useContext } from "react";
import Circle from "../Circle/Circle";
import {
  rockProperties,
  paperProperties,
  scissorsProperties,
} from "../constants/constants";
import "./Game.scss";

const Step1: React.FC = () => {
  return (
    <div className="game">
      <div className="top">
        <Circle circleProperties={paperProperties} />
        <Circle circleProperties={scissorsProperties} />
      </div>
      <div className="bottom">
        <Circle circleProperties={rockProperties} />
      </div>
    </div>
  );
};

export default Step1;
