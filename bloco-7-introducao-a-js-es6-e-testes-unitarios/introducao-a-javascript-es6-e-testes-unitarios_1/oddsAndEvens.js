// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// https://medium.com/coding-at-dawn/how-to-sort-an-array-numerically-in-javascript-2b22710e3958

const oddsAndEvens = (array) => array = array.sort((a,b) => a-b)

console.log(oddsAndEvens([13, 3, 4, 10, 7, 2]));

function oddsAndEvens2(array) {
  return array.sort(function(a, b) {
    return a-b
  })
}

console.log(oddsAndEvens2([13, 3, 4, 10, 7, 2]));