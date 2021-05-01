const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// const obj4 = obj3;

const obj4 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui
assert.deepStrictEqual(obj1, obj2, 'not equal obj1 and obj2')
// assert.deepStrictEqual(obj1, obj3, 'not equal obj1 and obj3')
// assert.deepStrictEqual(obj2, obj3, 'not equal obj2 and obj3')
assert.deepStrictEqual(obj3, obj4, 'not equal obj3 and obj4')
