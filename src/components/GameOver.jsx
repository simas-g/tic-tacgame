export default function GameOver({winner, onRestart}) {

    return <div id="game-over">
        {winner && <h2>You won, {winner}!</h2>}
        {!winner && <h2>Draw!</h2>}
        <button onClick={onRestart}>Restart</button>
    </div>
}