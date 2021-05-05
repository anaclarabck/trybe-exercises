const assert = require('assert');
const { get } = require('http');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

function authorBornIn1947_2 (array) {
  for (let index = 0; index < array.length; index += 1) {
    if ((books[index].author.birthYear) === 1947) {
      return books[index].author.name;
    }
  }
}

// Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947. 
function authorBornIn1947 (array) {
  const objBornIn1947 = array.find( (element, index) => books[index].author.birthYear === 1947);
  return objBornIn1947.author.name;
}

// Retorne o nome do livro de menor nome. 
function smallerName() {
  let minLength = Infinity
  let nameBook = ''
  const teste = books.forEach(element => {  
    if (element.name.length < minLength) {
      minLength = element.name.length
      nameBook = element.name
    }
  })
  return nameBook;
}

// Encontre o primeiro livro cujo nome possui 26 caracteres. 

function getNamedBook() {
  const nameBook26char = books.find( element => element.name.length === 26);
  return nameBook26char.name;
}

const getNamedBook2 = () => (nameBook26char = books.find( element => element.name.length === 26))
// console.log(getNamedBook2())
// retorna bloco inteiro


function booksOrderedByReleaseYearDesc() {
  const objectBooks = books.sort((bookA, bookB) => bookB.releaseYear - bookA.releaseYear)
  return objectBooks
}

// console.log(booksOrderedByReleaseYearDesc())

// Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário. 
function everyoneWasBornOnSecXX() {
  const verifyOnCenXX = books.every( (element) => element.author.birthYear > 1900 && element.author.birthYear < 2000)
  return verifyOnCenXX
}

// Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário. 
function someBookWasReleaseOnThe80s() {
  return books.some( (element) => 1980 <= element.releaseYear < 1990)
}

assert.strictEqual(authorBornIn1947(books), 'Stephen King');
assert.strictEqual(smallerName(), 'Duna');
assert.deepStrictEqual(getNamedBook(), 'As Crônicas de Gelo e Fogo');
// assert.deepStrictEqual(booksOrderedByReleaseYearDesc(), expectedResult);
assert.strictEqual(everyoneWasBornOnSecXX(), false);
assert.strictEqual(someBookWasReleaseOnThe80s(), true);