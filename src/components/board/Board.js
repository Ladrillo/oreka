import React from 'react';
import Cell from '../cell';
import StyledBoard from './styled';
import cuid from 'cuid';


export default class Board extends React.Component {
  render() {
    const { board, boardConfig } = this.props;

    return (
      <StyledBoard boardConfig={boardConfig}>
        {
          board.map((row, y) => (
            row.map((cell, x) => (
              <Cell cell={board[y][x]} key={cuid()} />
            ))
          ))
        }
      </StyledBoard>
    );
  }
}
