import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = () => {
    const [gameboard, setGameBoard] = useState(initialGameBoard);
    const handleSelectSquare = (row, col) => {
        setGameBoard(prev => {
            const updatedBoard = [...prev.map(inner => [...inner])]
            updatedBoard[row][col] = "X";
            return updatedBoard
        })
    }
  return (
    <ol id="game-board">
      {gameboard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
