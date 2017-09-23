import React from 'react';
import styled from 'styled-components';
import Cell from './Cell';
import { formatLine } from '../services/utils';


const StyledBoard = styled.div`
  display: grid;

  grid-template-columns: ${pr => {
    const columnCount = pr.board[0].length;
    const width = pr.size.x;

    return formatLine(columnCount, width);
  }};

  grid-template-rows: ${pr => {
    const columnCount = pr.board.length;
    const width = pr.size.y;

    return formatLine(columnCount, width);
  }};
`;

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        ['A', 'A', 'B'],
        ['B', 'A', 'B'],
        ['B', 'B', 'A'],
        ['B', 'B', 'A'],
      ],
      size: {
        x: 10, y: 5
      }
    };
  }

  render() {
    const { board, size } = this.state;

    return (
      <StyledBoard board={board} size={size}>
        {
          board.map((row, y) => (
            row.map((cell, x) => (
              <Cell x={x} y={y} value={board[y][x]} />
            ))
          ))
        }
      </StyledBoard>
    );
  }
}
