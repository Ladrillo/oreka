import React, { Component } from 'react';
import styled from 'styled-components';
import Board from '../board';
import generateBoard from '../../services/generateBoard';
import iterate from '../../services/iterate';


const StyledGame = styled.div`
  width: 100%;
`;

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: null,
      boardConfig: {
        width: 20,
        height: 20,
        columns: 10,
        rows: 10,
      }
    };
  }

  runGame = () => {
    const { board, boardConfig } = this.state;
    const newBoard = iterate({ board, boardConfig });
    this.setState({ board: newBoard });
  }

  stopGame = () => {
    clearInterval(window.interval);
  }

  loop = () => {
    window.interval = setInterval(() => {
      this.runGame();
    }, 500);
  }

  generateHandler = (e) => {
    const { columns, rows } = this.state.boardConfig;
    const board = generateBoard(columns, rows);
    this.setState({ board });
  }

  destroyHandler = (e) => {
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
