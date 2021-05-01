const substituteLetterX = (phrase, newString) => phrase.replace('x', newString)

// console.log(substituteLetterX('Tryber x aqui!', 'Ana Clara'))

const arrayGlobalEscope = ['JS', 'Github', 'HTML', 'CSS', 'Linux']

// const concatenate = (phrase, array) => `${phrase} Minhas cinco principais habilidades são: 
// ${array.sort()[0]};
// ${array.sort()[1]};
// ${array.sort()[2]};
// ${array.sort()[3]};
// ${array.sort()[4]};`

const calculateFatorial2 = number => (number > 1) ? number * (calculateFatorial2(number - 1)) : 1;

const concatenate = (phrase, array) => `${phrase} Minhas cinco principais habilidades são: 
${array.sort().join('; \n')}`

console.log(concatenate(substituteLetterX('Tryber x aqui!', 'Ana Clara'), arrayGlobalEscope));