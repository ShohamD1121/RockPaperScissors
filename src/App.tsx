import React from "react";
import { GameProvider } from "./context/GameContext";
import Header from "./components/Header/Header";
import Game from "./components/Game/Game";
import Rules from "./components/Rules/Rules";
import "./App.css";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <GameProvider>
        <Header />
        <Game />
        <Rules />
      </GameProvider>
    </React.Fragment>
  );
};

export default App;
