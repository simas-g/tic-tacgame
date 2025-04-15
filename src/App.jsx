import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combinations";
function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "0";
  }
  return currentPlayer;
}
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const currentPlayer = deriveActivePlayer(gameTurns);
  let gameboard = initialGameBoard;
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameboard[row][col] = player;
  }
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameboard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameboard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameboard[combination[2].row][combination[2].column];
    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
    console.log(gameboard)
  }
  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prev) => {
      const currentPlayer = deriveActivePlayer(prev);
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
          <Player
            name={"Player 1"}
            symbol={"X"}
            isActive={currentPlayer === "X"}
          />
          <Player
            name={"Player 2"}
            symbol={"0"}
            isActive={currentPlayer === "0"}
          />
        </ol>
        {winner && <p>You won, {winner}!</p>}
        <GameBoard
          board={gameboard}
          onSelectSquare={handleSelectSquare}
          turns={gameTurns}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
