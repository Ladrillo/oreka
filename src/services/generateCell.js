import cuid from 'cuid';


export function generateCell(behavior) {
  return {
    strategy: behavior,
    lifePoints: Math.ceil(Math.random(40) * 40),
    betrayedBy: new Set(),
    trustedBy: new Set(),
    id: cuid(),
  };
}

export function generateRandomCell() {
  const chance = Math.floor(Math.random(6) * 6);
  switch (chance) {
    case 0:
      return generateCell('evil');
    case 1:
      return generateCell('evil');
    case 2:
      return generateCell('chill');
    case 3:
      return generateCell('grudge');
    case 4:
      return null;
    case 5:
      return null;
  }
}
