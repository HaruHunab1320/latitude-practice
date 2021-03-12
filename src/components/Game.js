import React, { useState } from "react";
import Board from "./Board";
import { checkForWinner } from "../helpers";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = checkForWinner(board);
  const draw = !board.includes(null);

  const handleClick = (i) => {
    const gameState = board;
    if (winner || gameState[i]) return;

    gameState[i] = xIsNext ? "X" : "O";

    setBoard(gameState);
    setXisNext(!xIsNext);
  };

  const startGame = () => (
    <button onClick={() => setBoard(Array(9).fill(null))}>Start Game</button>
  );

  return (
    <>
      <div>
        <Board squares={board} onClick={handleClick} />
      </div>
      <p>
        {winner
          ? "Winner is: " + winner
          : draw
          ? "Draw Game"
          : "Next Player: " + (xIsNext ? "X" : "O")}
      </p>
      {startGame()}
    </>
  );
};

export default Game;
