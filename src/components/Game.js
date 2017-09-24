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
      size: {
        width: 15, height: 15
      }
    };
    this.generateHandler = this.generateHandler.bind(this);
    this.destroyHandler = this.destroyHandler.bind(this);
    this.findVisible = this.findVisible.bind(this);
    this.runGame = this.runGame.bind(this);
  }

  findVisible(x, y) {
    return findVisibleCells(
      x, y, this.state.size.width, this.state.size.height
    );
  };

  runGame() {
    const { board } = this.state;

    for (let i = 0; i < board.length[0]; i++) {
      for (let k = 0; k < board.length; k++) {
        console.log('cell: ', i, k);
      }
    }
  }

  generateHandler(e) {
    const board = generateBoard(4, 4);
    this.setState({ board });
  }

  destroyHandler(e) {
    this.setState({ board: null });
  }

  render() {
    const { board, size } = this.state;

    return (
      <StyledGame className="Game">
        {
          board &&
          <div>
            <Board
              board={board}
              size={size}
            />
            <button onClick={this.runGame}>run game</button>
            <button onClick={this.destroyHandler}>destroy board</button>
          </div>
        }
        <button onClick={this.generateHandler}>generate board</button>
      </StyledGame>
    );
  }
}
