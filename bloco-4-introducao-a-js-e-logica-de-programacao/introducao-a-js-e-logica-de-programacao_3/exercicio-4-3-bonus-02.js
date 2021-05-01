// Faça um programa que diz se um número definido numa variável é primo ou não.

let number = 79;
let isPrime = true;

for (let divider = 2; divider <= Math.floor(number); divider += 1) {
  if (number % divider === 0) {
    isPrime = false;
    break
  }
}

console.log('O número', number, 'é primo?', isPrime)