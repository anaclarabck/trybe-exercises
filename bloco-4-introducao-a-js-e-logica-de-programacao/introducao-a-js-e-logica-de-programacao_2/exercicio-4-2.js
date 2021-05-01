let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() 

console.log(numbers);


// Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado

let sum = 0
for (number of numbers) {
  sum += number;
}
console.log(sum);


// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array

let average = sum / numbers.length;
console.log(average);


// Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"

if (average > 20) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
}


// Utilizando for , descubra qual o maior valor contido no array e imprima-o

let higherNumber = numbers[0]
for (number of numbers) {
  if (number > higherNumber) {
    higherNumber = number;
  } 
}

console.log(higherNumber);


// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"

let nOdd = 0;
for (number of numbers) {
  if (number % 2 === 1) {
    nOdd += 1
  }
}

console.log(nOdd);


// Utilizando for , descubra qual o menor valor contido no array e imprima-o

let smallerNumber = numbers[0]
for (number of numbers) {
  if (number < smallerNumber) {
    smallerNumber = number;
  } 
}

console.log(smallerNumber);


// Utilizando for , crie uma array que vá de 1 até 25 e imprima o resultado
let array = [];

for (index = 1; index <=25; index += 1) {
  array.push(index);
}

console.log(array);

// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 

let array_2 = [];

for (number in array) {
  array_2.push(number / 2);
}

console.log(array_2)