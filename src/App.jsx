import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { useState } from "react";
function App() {
  const [active, setActive] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);
  function handleSelectSquare(rowIndex, colIndex) {
    setActive((prev) => (prev === "X" ? "0" : "X"));
    setGameTurns((prev) => {
      let currentPlayer = "X";
      if (prev.length > 0 && prev[0].player === "X") {
        currentPlayer = "0";
      }
      const updated = [
        {
          square: {
            row: rowIndex,
            col: colIndex,
          },
          player: currentPlayer,
        },
        ...prev,
      ];
      return updated;
    });
  }

  return (
    <main>
      <header>
        <img id="log" src="/game-logo.png" alt="" />
        <h1 className="text-center w-full">Tic-Tac-Toe</h1>
      </header>

      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name={"Player 1"} symbol={"X"} isActive={active === "X"} />
          <Player name={"Player 2"} symbol={"0"} isActive={active === "0"} />
        </ol>

        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log />
    </main>
  );
}

export default App;
