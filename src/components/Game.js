import React, { Component } from 'react';
import styled from 'styled-components';
import Board from './Board';
import { cloneDeep } from 'lodash';
import generateBoard from '../services/generateBoard';
import { generateCell } from '../services/generateCell';
import calculateVisibles from '../services/calculateVisibles';
import interact from '../services/interact';
import { cleanUpTheDead } from '../services/refreshBoard';


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
    this.loop = this.loop.bind(this);
  }

  componentDidMount() {
    // this.generateHandler();
    // this.loop();
  }
  runGame() {
    const { board, boardConfig } = this.state;
    const { columns, rows } = boardConfig;

    // what a freakin' mutation fest this is

    const newBoard = cloneDeep(board);
    // const newBoard = JSON.parse(JSON.stringify(board));
    // const newBoard = copy(board, {});

    // MAIN GAME LOOP
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < columns; x++) {
        const cell = newBoard[y][x];

        // EMPIEZA LA FIESTA
        if (cell) {
          // 1- all visible slots
          const visibleSlots = calculateVisibles(x, y, columns, rows);

          // 2- slots used by cells
          const visibleSlotsUsed = visibleSlots.filter(
            coords => newBoard[coords[1]][coords[0]] !== null
          );
          const totalInteractive = visibleSlotsUsed.length;
          const canInteract = !!totalInteractive;

          // 3- slots that are empty
          const visibleSlotsEmpty = visibleSlots.filter(
            coords => newBoard[coords[1]][coords[0]] === null
          );
          const totalReproductive = visibleSlotsEmpty.length;
          const canReproduce = !!totalReproductive && cell.lifePoints > 100;

          // 4- interact
          if (canInteract) {
            const randomInteractive = Math.floor(Math.random(totalInteractive) * totalInteractive);
            const [_x, _y] = visibleSlotsUsed[randomInteractive];
            const partner = newBoard[_y][_x];

            interact(cell, partner);
          }

          // 5- reproduce
          if (canReproduce) {
            const randomReproductive = Math.floor(Math.random(totalReproductive) * totalReproductive);
            const [_x, _y] = visibleSlotsEmpty[randomReproductive];

            newBoard[_y][_x] = generateCell(cell.strategy);
            const alteredCell = { ...cell, lifePoints: Math.floor(cell.lifePoints/2)};
            newBoard[y][x] = alteredCell;
          }

          if (!canInteract && !canReproduce) {
            const alteredCell = { ...cell, lifePoints: cell.lifePoints - 1};
            newBoard[y][x] = alteredCell;
          }
        }
      }
    }

    this.setState({ board: cleanUpTheDead(newBoard) });
  }

  loop() {
    // need a way to stop this
    setInterval(() => {
      this.runGame();
    }, 250);
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
            <button onClick={this.loop}>run iteration</button>
            <button onClick={this.destroyHandler}>destroy board</button>
          </div>
        }
        <button onClick={this.generateHandler}>generate board</button>
      </StyledGame>
    );
  }
}
