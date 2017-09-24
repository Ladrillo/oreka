export default function calculateVisibles(x, y, columns, rows) {
  let xS = [];
  let yS = [];

  if (x - 1 >= 0) xS.push(x - 1);
  if (x + 1 < columns) xS.push(x + 1);

  if (y - 1 >= 0) yS.push(y - 1);
  if (y + 1 < rows) yS.push(y + 1);

  let visibleCells = [];

  xS.forEach(newX => visibleCells.push([newX, y]));
  yS.forEach(newY => visibleCells.push([x, newY]));

  return visibleCells;
}
