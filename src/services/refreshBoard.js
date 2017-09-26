export function cleanUpTheDead(board) {
  const refreshedBoard = [];

  for (let row = 0; row < board.length; row++) {
    refreshedBoard.push(
      board[row].map(
        cell => (cell && cell.lifePoints > 0) ? cell : null)
    );
  }

  return refreshedBoard;
}
