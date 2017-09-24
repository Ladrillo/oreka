import React from 'react';
import styled from 'styled-components';
import Cell from './Cell';
import { formatLine } from '../services/cssHelpers';


const StyledBoard = styled.div`
  display: grid;

  grid-template-columns: ${pr => {
    const { columns, width } = pr.boardConfig;
    return formatLine(columns, width);
  }};

  grid-template-rows: ${pr => {
    const { rows, height } = pr.boardConfig;
    return formatLine(rows, height);
  }};
`;

export default class Board extends React.Component {
  render() {
    const { board, boardConfig } = this.props;

    return (
      <StyledBoard boardConfig={boardConfig}>
        {
          board.map((row, y) => (
            row.map((cell, x) => (
              <Cell cell={board[y][x]} />
            ))
          ))
        }
      </StyledBoard>
    );
  }
}
