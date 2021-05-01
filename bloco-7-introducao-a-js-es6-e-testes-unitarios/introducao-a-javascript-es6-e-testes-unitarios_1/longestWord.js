const longestWord = (phrase) => (phrase.split(' ')[0].length > phrase.split(' ')[1].length) ? phrase.split(' ')[0] : phrase.split(' ')[1];

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'))

// const longestWord2 = (phrase) => phrase = phrase.split(' ').sort((a,b)=>a-b)
// console.log(longestWord2('Antônio foi no banheiro e não sabemos o que aconteceu'))

// const oddsAndEvens = (array) => array = array.sort((a,b)=>a-b)

// console.log(oddsAndEvens([13, 3, 4, 10, 7, 2]));

// function oddsAndEvens2(array) {
//   return array.sort(function(a, b) {
//     return a-b
//   })
// }

const arrayT = ('Antônio foi no banheiro e não sabemos o que aconteceu').split(' ')
const arrayNew = arrayT.map(array => array.length)

console.log(arrayT.map(array => array.length))

console.log(Math.max(arrayNew))

// const longestWord2 = (phrase) => {
//   let arrayWords = phrase.split(' ')
//   let longestWord22 = arrayWords[0]
//   for (let index = 0; index < arrayWords.length; index += 1) {
//     if (longestWord.length < arrayWords[index].length) {
//       longestWord22 = arrayWords[index]
//     }
//   }
//   return longestWord22
// }