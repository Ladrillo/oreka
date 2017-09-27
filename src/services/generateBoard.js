import { generateRandomCell } from './generateCell';


export default function generateBoard(columns, rows) {
  const board = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let k = 0; k < columns; k++) {
      row.push(generateRandomCell());
    }
    board.push(row);
  };

  return board;
}
