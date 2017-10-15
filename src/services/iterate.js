import { cloneDeep } from 'lodash';
import { generateCell } from '../services/generateCell';
import  { calculateVisibles } from './calculateVisibles';
import { cleanUpTheDead } from '../services/refreshBoard';
import interact from '../services/interact';

export default function iterate({ board, boardConfig }) {
  const newBoard = cloneDeep(board);
  const { columns, rows } = boardConfig;

  // MAIN GAME LOOP
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < columns; x++) {
      const cell = newBoard[y][x];

      // EMPIEZA LA FIESTA
      if (cell) {
        // A - GATHERING OF INFORMATION

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

        // B ACTIONS

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
          const alteredCell = { ...cell, lifePoints: Math.floor(cell.lifePoints / 2) };
          newBoard[y][x] = alteredCell;
        }

        if (!canInteract && !canReproduce) {
          const alteredCell = { ...cell, lifePoints: cell.lifePoints - 1 };
          newBoard[y][x] = alteredCell;
        }
      }
    }
  }

  return cleanUpTheDead(newBoard);
}
