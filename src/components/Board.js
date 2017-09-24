import React from 'react';
import styled from 'styled-components';
import Cell from './Cell';
import { formatLine } from '../services/utils';


const StyledBoard = styled.div`
  display: grid;

  grid-template-columns: ${pr => {
    const { cellsX, width } = pr.boardConfig;
    return formatLine(cellsX, width);
  }};

  grid-template-rows: ${pr => {
    const { cellsY, height } = pr.boardConfig;
    return formatLine(cellsY, height);
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
              <Cell
                coords={{x, y}}
                cell={board[y][x]}
              />
            ))
          ))
        }
      </StyledBoard>
    );
  }
}
