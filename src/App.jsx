import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
function App() {


  return (
    <main>
      <header>
        <img id="log" src="/game-logo.png" alt="" />
        <h1 className="text-center w-full">Tic-Tac-Toe</h1>
      </header>

      <div id="game-container">
          <ol id="players">
            <Player name={'Player 1'} symbol={'X'}/>
            <Player name={'Player 2'} symbol={'0'}/>
          </ol>

        <GameBoard/>
      </div>
    </main>
  )
}

export default App
