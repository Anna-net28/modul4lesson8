'use strict'

let length = 10;
let result = []
let min = 1;
let max = 100;

for (let i = 0; i < length; i++) {
  result.push(Math.round(Math.random() * max));
}
console.log(result);


