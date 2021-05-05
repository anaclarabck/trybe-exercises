const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.find(verifyEven);

console.log(isEven); // 30

console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.find((number) => number % 2 === 0);

console.log(isEven2); // 30

// array.some:

const verifyDivisibleBySomeNumber = (number, arrayNumbers) => arrayNumbers.some((element) => element % number === 0);

console.log(verifyDivisibleBySomeNumber(33, numbers))

// array.every:

const numbers2 = [2, 4, 6, 8, 10, 12]

const verifyAllDivisibleBySomeNumber = (number, arrayNumbers) => arrayNumbers.every((element) => element % number === 0);

console.log(verifyAllDivisibleBySomeNumber(2, numbers2))

// ------

const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyGrades = (studentGrades) => (
  Object.values(studentGrades).every((grade) => grade === 'Aprovado')
);

console.log(verifyGrades(grades));
