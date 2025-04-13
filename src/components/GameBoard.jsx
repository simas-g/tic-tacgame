
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({onSelectSquare, turns}) => {
  let gameboard = initialGameBoard;
  for(const turn of turns) {
    const {square, player} = turn;
    const {row, col} = square;

    gameboard[row][col] = player
  }

    // const [gameboard, setGameBoard] = useState(initialGameBoard);
    
    // const handleSelectSquare = (row, col) => {
    //     setGameBoard(prev => {
    //         const updatedBoard = [...prev.map(inner => [...inner])]
    //         updatedBoard[row][col] = activeSymbol;
    //         return updatedBoard
    //     })
    //     onSelectSquare()
    // }
  return (
    <ol id="game-board">
      {gameboard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
