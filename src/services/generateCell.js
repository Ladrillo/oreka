import cuid from 'cuid';


export function generateCell() {
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

function makeEmpty() {
  return (
    {
      display: '',
      strategy: null,
      lifePoints: null,
    }
  );
}

export function makeCreature(behavior) {
  return (
    {
      display: behavior === 'chill' ? ':)' : '>:(',
      strategy: behavior,
      lifePoints: Math.ceil(Math.random(9) * 9),
      id: cuid(),
    }
  );
}