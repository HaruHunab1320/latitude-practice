import Square from "./Square";

const Board = ({ squares, onClick }) => (
  <div>
    {squares.map((square, i) => (
      <Square value={square} onClick={onClick(i)} />
    ))}
  </div>
);

export default Board;
