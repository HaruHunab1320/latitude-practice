import React, { useState } from "react";
import Board from "./Board";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));

  const handleClick = (i) => {};

  return <Board squares={board} onClick={handleClick} />;
};

export default Game;
