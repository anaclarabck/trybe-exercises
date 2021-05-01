const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

console.log(myRemove([1, 2, 3, 4], 5))

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4], 'error 01')
// assert.deepstrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4], 'error 02')
assert.notStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4], 'error 03')
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4], 'error 04')