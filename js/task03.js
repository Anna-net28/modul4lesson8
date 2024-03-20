'use strict'

function generateRandomArray(n, m, count, parity) {
  let result = [];
  const range = Math.abs(m - n) + 1;
  const min = Math.min(n, m);
  const max = Math.max(n, m);

  while (result.length < count) {
    const randomNum = Math.floor(Math.random() * range) + min;
    if (parity === 'even' && randomNum % 2 === 0) {
      result.push(randomNum);
    } else if (parity === 'odd' && randomNum % 2 !== 0) {
      result.push(randomNum);
    }
  }
  return result;
}

console.log(generateRandomArray(10, 100, 5, 'even'));
console.log(generateRandomArray(-50, 50, 2, 'odd'));