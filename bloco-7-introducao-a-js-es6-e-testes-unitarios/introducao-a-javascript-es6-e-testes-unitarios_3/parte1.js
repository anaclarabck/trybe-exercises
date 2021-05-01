const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui


assert.strictEqual(sum(15,5), 20, 'error')
assert.strictEqual(sum(20,-30), -10, 'error1')
assert.strictEqual(sum(4.5,5.5), 10, 'error2')
assert.strictEqual(sum(3.15,3.2), 6.35, 'error3')
// assert.strictEqual(sum(2,'3'), 5, 'error3')

assert.throws(() => sum('a', 'b'))