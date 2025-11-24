import { useState } from "react";
import styles from "./styles.module.css";

const TicTacToe = () => {
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X");
  const [gameBoard, setGameBoard] = useState<string[]>(Array(9).fill(""));
  const winner = checkWinner();
  const gameWon = winner ? true : false;
  const gameOver = gameWon || checkFullBoard();

  const restartGame = () => {
    setCurrentPlayer("X");
    setGameBoard(Array(9).fill(""));
  };

  const makeMove = (index: number) => {
    if (gameBoard[index] || gameOver) return;

    setGameBoard((prevGameBoard) =>
      prevGameBoard.map((value, i) => (i === index ? currentPlayer : value))
    );

    setCurrentPlayer((prevCurrentPlayer) =>
      prevCurrentPlayer === "X" ? "O" : "X"
    );
  };

  function checkWinner() {
    const winningPattenrs = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPattenrs.length; i++) {
      const [a, b, c] = winningPattenrs[i];

      if (
        gameBoard[a] &&
        gameBoard[a] === gameBoard[b] &&
        gameBoard[a] === gameBoard[c]
      ) {
        return gameBoard[a];
      }
    }

    return null;
  }

  function checkFullBoard() {
    for (let i = 0; i < gameBoard.length; i++) {
      if (!gameBoard[i]) return false;
    }

    return true;
  }

  return (
    <div className={styles["game-container"]}>
      <div className={styles["game-board"]}>
        {gameBoard.map((val, index) => (
          <button
            key={index}
            className={styles["game-square"]}
            onClick={() => makeMove(index)}
            disabled={gameOver}
          >
            {val}
          </button>
        ))}
      </div>
      {gameWon ? (
        <p>Winner is {winner}! Please restart the game</p>
      ) : gameOver ? (
        <p>This is a draw! Please restart the game</p>
      ) : (
        <p>Next player is {currentPlayer}</p>
      )}
      <button onClick={restartGame}>Restart</button>
    </div>
  );
};

export default TicTacToe;
