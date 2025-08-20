import React from 'react'
const intialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]
const Gameboard = ({ onSelectSquare, turns }) => {

    let gameBoard = intialGameBoard;
    for (const turn of turns) {
        const { square, player } = turn;
        const { row, col } = square;
        gameBoard[row][col] = player;
    }
    // const [gameBoard, setGameBoard] = useState(intialGameBoard)
    // function handleSelectSquare(rowIndex, colIndex) {
    //     setGameBoard((prevBoard) => {
    //         const updatedBoard = [...prevBoard.map(innerArray => [...innerArray])]
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //     })
    //     onSelectSquare();
    // }
    return (
        <ol id='game-board'>
            {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => <li key={colIndex}><button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol != null}>{playerSymbol}</button></li>)}
                </ol>
            </li>)}
        </ol>
    )
}

export default Gameboard
