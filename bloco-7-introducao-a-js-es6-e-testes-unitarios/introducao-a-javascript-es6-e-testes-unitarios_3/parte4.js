const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui

assert.strictEqual(myFizzBuzz(15), 'fizzbuzz', 'error 01')
assert.strictEqual(myFizzBuzz(21), 'fizz', 'error 02')
assert.strictEqual(myFizzBuzz(20), 'buzz', 'error 03')
assert.strictEqual(myFizzBuzz(22), 22, 'error 04')
assert.strictEqual(myFizzBuzz('fizzzzz'), false, 'error 05')