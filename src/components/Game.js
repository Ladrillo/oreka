import React, { Component } from 'react';
import styled from 'styled-components';
import Board from './Board';
import generateBoard from '../services/generateBoard';

const StyledGame = styled.div`

`;

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: null,
      size: {
        width: 15, height: 15 // em
      }
    };
  }

  generateHandler(e) {
    const board = generateBoard(2, 2);
    this.setState({ board });
  }

  destroyHandler(e) {
    this.setState({ board: null });
  }

  render() {
    const { board, size } = this.state;

    return (
      <StyledGame className="Game">
        {board && <Board board={board} size={size} />}

        <button onClick={this.generateHandler.bind(this)}>generate board</button>
        {
          board &&
          <div>
            <button onClick={this.destroyHandler.bind(this)}>destroy board</button>
          </div>
        }
      </StyledGame>
    );
  }
}
