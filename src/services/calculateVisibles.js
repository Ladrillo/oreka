export function calculateVisibles(x, y, columns, rows) {
  const result = [];

  if (x - 1 >= 0) {
    if (y - 1 >= 0) {
      result.push([x - 1, y - 1]);
    }
    if (y + 1 < rows) {
      result.push([x - 1, y + 1]);
    }
    result.push([x - 1, y]);
  }

  if (x + 1 < columns) {
    if (y - 1 >= 0) {
      result.push([x + 1, y - 1]);
    }
    if (y + 1 < rows) {
      result.push([x + 1, y + 1]);
    }
    result.push([x + 1, y]);
  }

  if (y - 1 >= 0) {
    result.push([x, y - 1]);
  }

  if (y + 1 < rows) {
    result.push([x, y + 1]);
  }

  return result;
}
