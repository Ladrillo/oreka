function makeCreature(behavior) {
  return (
    {
      display: behavior,
      strategy: behavior,
    }
  );
}

function makeEmpty() {
  return (
    {
      display: '',
      strategy: null,
    }
  );
}

export default function generateBoard(x, y) {
  const board = [];
  for (let i = 0; i < x; i++) {
    const row = [];
    for (let k = 0; k < y; k++) {
      row.push(generateCell());
    }
    board.push(row);
  };

  return board;
}

function generateCell() {
  const chance = Math.floor(Math.random(3) * 3);
  switch (chance) {
    case 0:
      return makeCreature('evil');
    case 1:
      return makeCreature('chill');
    case 2:
      return makeEmpty();
  }
}