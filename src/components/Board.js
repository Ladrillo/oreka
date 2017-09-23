import React from 'react';
import styled from 'styled-components';
import Cell from './Cell';
import { formatLine } from '../services/utils';
import generateBoard from '../services/generateBoard';


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
      board: null,
      size: {
        x: 10, y: 10
      }
    };
  }

  clickHandler(e) {
    const board = generateBoard();
    this.setState({ board });
  }

  render() {
    const { board, size } = this.state;

    if (!board || !board.length) {
      return <button onClick={this.clickHandler.bind(this)}>generate board</button>;
    }

    return (
      <StyledBoard board={board} size={size}>
        {
          board.map((row, y) => (
            row.map((cell, x) => (
              <Cell x={x} y={y} item={board[y][x]} />
            ))
          ))
        }
      </StyledBoard>
    );
  }
}
