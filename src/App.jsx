import { useState } from "react"
import Player from "./components/Player"
import Gameboard from "./components/Gameboard"
import Log from "./components/Log"
function App() {
  const [activePlayer, setActivePlayer] = useState('X')
  const [gameTurns, setGameTurns] = useState([])
  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((currActivePlayer) => currActivePlayer === 'X' ? 'O' : 'X')
    setGameTurns(prevTurns => {
      let currentPlayer = 'X';
      if (prevTurns.length > 0 && prevTurns[0].player == 'X') {
        currentPlayer = 'O';
      }
      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: activePlayer }, ...prevTurns]
      return updatedTurns
    })
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="player1" symbol="X" isActive={activePlayer === "X"} />
          <Player initialName="player2" symbol="0" isActive={activePlayer === "O"} />
        </ol>
        <Gameboard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>

  )
}
export default App
