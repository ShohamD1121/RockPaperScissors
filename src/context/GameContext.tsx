import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface ChoosenCircle {
  background: string;
  icon: string;
}

interface GameContextType {
  step: string;
  nextStep: () => void;
  choosenCircle: ChoosenCircle;
  setChoosenCircle: Dispatch<SetStateAction<ChoosenCircle>>;
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
}

const GameContext = createContext<GameContextType>({
  step: "step 1",
  nextStep: () => {},
  choosenCircle: {
    background: "",
    icon: "",
  },
  setChoosenCircle: () => {},
  score: 0,
  setScore: () => {},
});

interface GameProviderProps {
  children: React.ReactNode;
}

function GameProvider(props: GameProviderProps) {
  const [step, setStep] = useState("step 1");
  const [score, setScore] = useState(() => {
    const savedScore = localStorage.getItem("score");
    if (savedScore !== null) {
      return parseInt(savedScore);
    } else {
      return 0;
    }
  });
  const [choosenCircle, setChoosenCircle] = useState({
    background: "",
    icon: "",
  });

  function nextStep() {
    switch (step) {
      case "step 1":
        setStep("step 2");
        break;
      default:
        setStep("step 1");
        break;
    }
  }

  return (
    <GameContext.Provider
      value={{
        step,
        nextStep,
        choosenCircle,
        setChoosenCircle,
        score,
        setScore,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
}

export { GameContext, GameProvider };
