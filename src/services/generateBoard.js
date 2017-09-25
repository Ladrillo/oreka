import generateCell from './generateCell';


export default function generateBoard(columns, rows) {
  const board = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let k = 0; k < columns; k++) {
      row.push(generateCell());
    }
    board.push(row);
  };

  return board;
}
