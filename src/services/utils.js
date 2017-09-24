export function formatLine(count, length) {
  const fraction = length / count;

  let result = '';

  for (let i = 0; i < count; i++) {
    result += `${fraction}rem `;
  }

  return result;
}


export function calculateVisible(x, y, width, height) {
  let xS = [];
  let yS = [];

  if (x - 1 >= 0) xS.push(x - 1);
  if (x + 1 < width) xS.push(x + 1);

  if (y - 1 >= 0) yS.push(y - 1);
  if (y + 1 < height) yS.push(y + 1);

  let visibleCells = [];

  xS.forEach(newX => visibleCells.push([newX, y]));
  yS.forEach(newY => visibleCells.push([x, newY]));

  return visibleCells;
}