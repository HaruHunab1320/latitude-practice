import Square from "./Square";

const style = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  boarder: "solid 4x black",
  height: "300px",
  width: "300px",
  margin: "0 auto"
};

const Board = ({ squares, onClick }) => (
  <div style={style}>
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);

export default Board;
