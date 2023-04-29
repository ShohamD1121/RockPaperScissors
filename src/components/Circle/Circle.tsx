import React, { useContext } from "react";
import "./Circle.scss";
import { GameContext } from "../../context/GameContext";

interface Props {
  circleProperties: {
    background: string;
    icon: string;
  };
}

const Circle: React.FC<Props> = ({ circleProperties }) => {
  const { step, nextStep, setChoosenCircle } = useContext(GameContext);

  const handleClick = () => {
    setChoosenCircle(circleProperties);
    nextStep();
  };

  return (
    <div
      className={`${step === "step 1" ? "outer_circle" : "outer_circle-step2"}`}
      style={{
        background: circleProperties.background,
      }}
      onClick={handleClick}
    >
      <div className="inner_circle">
        <img src={circleProperties.icon} />
      </div>
    </div>
  );
};

export default Circle;
