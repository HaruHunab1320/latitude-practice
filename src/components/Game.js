import React, { useState } from "react";
import Board from "./Board";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);

  const handleClick = (i) => {};

  return (
    <>
      <div>
        <Board squares={board} onClick={handleClick} />
      </div>
    </>
  );
};

export default Game;
