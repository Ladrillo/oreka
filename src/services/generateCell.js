import cuid from 'cuid';


export function generateCell(behavior) {
  return {
    strategy: behavior,
    lifePoints: Math.ceil(Math.random(30) * 30),
    betrayedBy: new Set(),
    trustedBy: new Set(),
    id: cuid(),
  };
}

export function generateRandomCell() {
  const chance = Math.floor(Math.random(3) * 3);
  switch (chance) {
    case 0:
      return generateCell('evil');
    case 1:
      return generateCell('grudge');
    case 2:
      return null;
  }
}
