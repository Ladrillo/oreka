import React, { Component } from 'react';
import styled from 'styled-components';
import Board from './Board';
import generateBoard from '../services/generateBoard';
import calculateVisibles from '../services/calculateVisibles';
import interact from '../services/interact';
import { cleanUpTheDead } from '../services/refreshBoard';


export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: null,
      boardConfig: {
        width: 60,
        height: 60,
        columns: 10,
        rows: 10,
      }
    };
    this.generateHandler = this.generateHandler.bind(this);
    this.destroyHandler = this.destroyHandler.bind(this);
    this.runGame = this.runGame.bind(this);
  }

  runGame() {
    const { board, boardConfig } = this.state;
    const { columns, rows } = boardConfig;

    // what a freakin' mutation fest this is
    const newBoard = JSON.parse(JSON.stringify(board));

    // MAIN GAME LOOP
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < columns; x++) {
        const cell = newBoard[y][x];

        // EMPIEZA LA FIESTA
        if (cell) {
          // find all visible pairs of coordinates
          const visibleCoords = calculateVisibles(x, y, columns, rows);

          // filter out empty cells
          const visibleCells = visibleCoords.filter(coords => newBoard[coords[1]][coords[0]] !== null);
          const totalVisibles = visibleCells.length;

          if (!totalVisibles) {
            console.log(x, y, 'did not find partner');
            continue;
          }

          // get coordinates of just one of the visibles
          const [xPartner, yPartner] = visibleCells[Math.floor(Math.random(totalVisibles) * totalVisibles)];
          const partner = newBoard[yPartner][xPartner];

          console.log('me: ', cell, 'my life BEFORE: ', cell.lifePoints);
          console.log('my partner: ', partner, 'his life BEFORE: ', partner.lifePoints);

          // recompute the new cells with the new lifePoints after interaction
          interact(cell, partner);
          console.log('me: ', cell, 'my life AFTER: ', cell.lifePoints);
          console.log('my partner: ', partner, 'his life AFTER: ', partner.lifePoints);
        }
        else {
          console.log('null');
        }
      }
    }

    this.setState({ board: cleanUpTheDead(newBoard) });
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
            <button onClick={this.runGame}>run iteration</button>
            <button onClick={this.destroyHandler}>destroy board</button>
          </div>
        }
        <button onClick={this.generateHandler}>generate board</button>
      </div>
    );
  }
}
