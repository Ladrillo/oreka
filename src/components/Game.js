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
        x: 20, y: 20
      }
    };
  }

  generateHandler(e) {
    const board = generateBoard(5, 5);
    this.setState({ board });
  }

  destroyHandler(e) {
    this.setState({ board: null });
  }

  render() {
    const { board, size } = this.state;

    return (
      <StyledGame className="Game">
        { board && <Board board={board} size={size}/> }

        { !board && <button onClick={this.generateHandler.bind(this)}>generate board</button> }
        { board && <button onClick={this.destroyHandler.bind(this)}>destroy board</button> }
      </StyledGame>
    );
  }
}
