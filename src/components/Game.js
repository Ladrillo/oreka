import React, { Component } from 'react';
import styled from 'styled-components';
import Board from './Board';
import generateBoard from '../services/generateBoard';
import calculateVisibles from '../services/calculateVisibles';


export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: null,
      boardConfig: {
        width: 20,
        height: 20,
        columns: 3,
        rows: 3,
      }
    };
    this.generateHandler = this.generateHandler.bind(this);
    this.destroyHandler = this.destroyHandler.bind(this);
    this.runGame = this.runGame.bind(this);
  }

  runGame() {
    const { board, boardConfig } = this.state;
    const { columns, rows } = boardConfig;

    // MAIN GAME LOOP
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < columns; x++) {

        // EMPIEZA LA FIESTA
        if (board[y][x]) {
          console.log('coords ', x, y, board[y][x], calculateVisibles(x, y, columns, rows));
        }
        else {
          console.log('null');
        }
      }
    }
  }

  generateHandler(e) {
    const { columns, rows } = this.state.boardConfig;
    const board = generateBoard(columns, rows);
    this.setState({ board });
  }

  destroyHandler(e) {
    this.setState({ board: null });
  }

  render() {
    const { board, boardConfig } = this.state;

    return (
      <div className="Game">
        {
          board &&
          <div>
            <Board board={board} boardConfig={boardConfig} />
            <button onClick={this.runGame}>run game</button>
            <button onClick={this.destroyHandler}>destroy board</button>
          </div>
        }
        <button onClick={this.generateHandler}>generate board</button>
      </div>
    );
  }
}
