import cuid from 'cuid';


const behaviorDisplay = {
  chill: ':)',
  evil: '>:(',
};

export function generateCell(behavior) {
  return {
    display: behaviorDisplay[behavior],
    strategy: behavior,
    lifePoints: Math.ceil(Math.random(30) * 30),
    id: cuid(),
  };
}

export function generateRandomCell() {
  const chance = Math.floor(Math.random(3) * 3);
  switch (chance) {
    case 0:
      return generateCell('evil');
    case 1:
      return generateCell('chill');
    case 2:
      return null;
  }
}
