import cuid from 'cuid';


const behaviorDisplay = {
  chill: ':)',
  evil: '>:(',
};

function makeUnit(behavior) {
  return {
    display: behaviorDisplay[behavior],
    strategy: behavior,
    lifePoints: Math.ceil(Math.random(9) * 9),
    id: cuid(),
  };
}

export default function generateCell() {
  const chance = Math.floor(Math.random(3) * 3);
  switch (chance) {
    case 0:
      return makeUnit('evil');
    case 1:
      return makeUnit('chill');
    case 2:
      return null;
  }
}
