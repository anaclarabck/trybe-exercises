// (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa. 

function romanNumerals(roman) {
  let arrayRomanNumerals = [];
  let sumNumerals = 0;

  for (numeral of roman) {
    if (numeral === 'M'){
      arrayRomanNumerals.push(1000);
    } else if (numeral === 'D') {
      arrayRomanNumerals.push(500);
    } else if (numeral === 'C') {
      arrayRomanNumerals.push(100);
    } else if (numeral === 'L') {
      arrayRomanNumerals.push(50);
    } else if (numeral === 'X') {
      arrayRomanNumerals.push(10);
    } else if (numeral === 'V') {
      arrayRomanNumerals.push(5);
    } else if (numeral === 'I') {
      arrayRomanNumerals.push(1);
    }
  }

  for (let index = 0; index < arrayRomanNumerals.length; index += 1) {
    if (index === arrayRomanNumerals.length - 1) {
      sumNumerals += arrayRomanNumerals[index];
    } else if (arrayRomanNumerals[index] < arrayRomanNumerals[index + 1]) {
      sumNumerals -= arrayRomanNumerals[index];
    } else {
      sumNumerals += arrayRomanNumerals[index];
    }
  }

  return sumNumerals;
}

console.log(romanNumerals('DCCLVIII'))