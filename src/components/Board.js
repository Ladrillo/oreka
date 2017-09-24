import React from 'react';
import styled from 'styled-components';
import Cell from './Cell';
import { formatLine } from '../services/utils';


const StyledBoard = styled.div`
  display: grid;

  grid-template-columns: ${pr => {
    const columnCount = pr.board[0].length;
    const width = pr.size.width;

    return formatLine(columnCount, width);
  }};

  grid-template-rows: ${pr => {
    const columnCount = pr.board.length;
    const width = pr.size.height;

    return formatLine(columnCount, width);
  }};
`;

export default class Board extends React.Component {
  render() {
    const { board, size } = this.props;

    return (
      <StyledBoard board={board} size={size}>
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
