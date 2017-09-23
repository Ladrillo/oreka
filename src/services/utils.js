export function formatLine(count, length) {
  const fraction = length / count;

  let result = '';

  for (let i = 0; i < count; i++) {
    result += `${fraction}rem `;
  }

  return result;
}
