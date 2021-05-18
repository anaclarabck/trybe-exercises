const { test, expect, it } = require('@jest/globals');
const { describe } = require('yargs');
const { sum } = require('./exercicio1')

// myRemove, myRemoveWithoutCopy, myFizzBuzz, obj1, obj2, obj3

describe('Testes do exercício 1', () => {
  it('Teste se o retorno de sum(4, 5) é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
});