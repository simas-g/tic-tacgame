import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combinations";
function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "0";
  }
  return currentPlayer;
}
const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
}
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function deriveWinner(gameboard, players) {
  let winner
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
      winner = players[firstSquareSymbol];
    }
  }
  return winner

}
function deriveGameBoard(gameTurns) {
  let gameboard = [...initialGameBoard.map(row => [...row])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameboard[row][col] = player;
  }
  return gameboard
}
function App() {
  const [players, setPlayers] = useState(PLAYERS)
  const [gameTurns, setGameTurns] = useState([]);
  const currentPlayer = deriveActivePlayer(gameTurns);
  let gameboard = deriveGameBoard(gameTurns)
  const winner = deriveWinner(gameboard, players)

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
  function handleRestart() {
    setGameTurns([])
  }
  function handlePlayerNameChange(symbol, newName) {
    setPlayers(prevPlayers => {
      return {
        ...[prevPlayers],
        [symbol]: newName
      }
    })
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
            name={PLAYERS.X}
            symbol={"X"}
            isActive={currentPlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            name={PLAYERS.O}
            symbol={"0"}
            isActive={currentPlayer === "0"}
            onChangeName={handlePlayerNameChange}

          />
        </ol>
        {(gameTurns.length === 9 || winner )&& <GameOver winner={winner} onRestart={handleRestart}/>}
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
