import { useState } from "react";

export default function GameBoard() {
  let initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  let [gameBoard ,setGameBoard] = useState(initialBoard);

  function handleGameBoard(row, col){
    setGameBoard((prev) => {
        const updated = [...prev.map(ele => [...ele])];
        updated[row][col] = 'X';
        return updated;
  })
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button onClick={()=>handleGameBoard(rowIndex,colIndex)}>{col}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
