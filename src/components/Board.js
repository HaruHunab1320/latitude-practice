import Square from "./Square";

const style = {
  display: "grid",
  gridTemplateColumn: "repeat(3, 1fr)",
  boarder: "solid 4x black",
  height: "300px",
  width: "300px"
};

const Board = ({ squares, onClick }) => (
  <div style={style}>
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={onClick(i)} />
    ))}
  </div>
);

export default Board;
