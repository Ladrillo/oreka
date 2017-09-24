import { generateCell } from './generateCell';

export default function generateBoard(x, y) {
  const board = [];
  for (let i = 0; i < x; i++) {
    const row = [];
    for (let k = 0; k < y; k++) {
      row.push(generateCell());
    }
    board.push(row);
  };

  return board;
}
