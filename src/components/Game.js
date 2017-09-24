import React, { Component } from 'react';
import styled from 'styled-components';
import Board from './Board';
import generateBoard from '../services/generateBoard';
import { findVisibleCells } from '../services/utils';

const StyledGame = styled.div`

`;

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: null,
      boardConfig: {
        width: 20,
        height: 15,
        cellsX: 2,
        cellsY: 5,
      }
    };
    this.generateHandler = this.generateHandler.bind(this);
    this.destroyHandler = this.destroyHandler.bind(this);
    this.findVisible = this.findVisible.bind(this);
    this.runGame = this.runGame.bind(this);
  }

  findVisible(x, y) {
    const { cellsX, cellsY } = this.state.boardConfig;

    return findVisibleCells(
      x, y, cellsX, cellsY
    );
  };

  runGame() {
    const { board } = this.state;

    for (let y = 0; y < board.length; y++) {
      for (let x = 0; x < board[0].length; x++) {
        board[y][x].visibles = this.findVisible(x, y);
        console.log('cell present! ', x, y, board[y][x]);
      }
    }
  }

  generateHandler(e) {
    const { cellsX, cellsY } = this.state.boardConfig;
    const board = generateBoard(cellsX, cellsY);
    this.setState({ board });
  }

  destroyHandler(e) {
    this.setState({ board: null });
  }

  render() {
    const { board, boardConfig } = this.state;

    return (
      <StyledGame className="Game">
        {
          board &&
          <div>
            <Board board={board} boardConfig={boardConfig} />
            <button onClick={this.runGame}>run game</button>
            <button onClick={this.destroyHandler}>destroy board</button>
          </div>
        }
        <button onClick={this.generateHandler}>generate board</button>
      </StyledGame>
    );
  }
}
