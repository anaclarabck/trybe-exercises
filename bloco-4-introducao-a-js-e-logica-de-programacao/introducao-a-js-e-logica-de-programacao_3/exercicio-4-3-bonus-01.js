// Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar

let n = 7;
let asterisks = '';
let middle = (n/2) + 0.5;
let left = middle;
let right = middle;

for (let lines = 1; lines <= n; lines +=2) {
  for (let columns = 1; columns <= n; columns += 1) {
    if (columns === middle && lines === 1) {
      asterisks += '*';
    } else if (left === columns || right === columns || lines === n) {
      asterisks += '*';
    } else {
      asterisks += ' '
    }
  }
  console.log(asterisks);
  asterisks = ''
  left -= 1;
  right += 1;
}