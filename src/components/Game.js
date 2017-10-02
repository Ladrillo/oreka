import React, { Component } from 'react';
import styled from 'styled-components';
import Board from './Board';
import generateBoard from '../services/generateBoard';
import iterate from '../services/iterate';


const StyledGame = styled.div`
  width: 100%;
`;

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: null,
      boardConfig: {
        width: 60,
        height: 60,
        columns: 20,
        rows: 20,
      }
    };
    this.generateHandler = this.generateHandler.bind(this);
    this.destroyHandler = this.destroyHandler.bind(this);
    this.runGame = this.runGame.bind(this);
    this.stopGame = this.stopGame.bind(this);
    this.loop = this.loop.bind(this);
  }

  runGame() {
    const { board, boardConfig } = this.state;
    const newBoard = iterate({ board, boardConfig });
    this.setState({ board: newBoard });
  }

  stopGame() {
    clearInterval(window.interval);
  }

  loop() {
    window.interval = setInterval(() => {
      this.runGame();
    }, 500);
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
      <StyledGame className="Game">
        {
          board &&
          <div>
            <Board board={board} boardConfig={boardConfig} />
            <button onClick={this.loop}>run iterations</button>
            <button onClick={this.stopGame}>stop iterations</button>
            <button onClick={this.destroyHandler}>destroy board</button>
          </div>
        }
        <button onClick={this.generateHandler}>generate board</button>
      </StyledGame>
    );
  }
}
