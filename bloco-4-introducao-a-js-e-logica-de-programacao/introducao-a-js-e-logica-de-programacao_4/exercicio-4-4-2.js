// 1. Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for. 

function checkPalindrome(word) {
  
  var isPalindrome = true

  for (var index = 0; index < (word.length / 2); index += 1) {
    if (word[index] !== word[word.length - 1 - index]) {
      isPalindrome = false
      break
    }
  }

  return isPalindrome;
}

console.log(checkPalindrome('arara'));

// 2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor. 

function higherValue(array) {
  let keyHigherValue = 0

  for (key in array) {
    if (array[key] > array[keyHigherValue]) {
      keyHigherValue = key;
    }
  }
  return keyHigherValue;
}

console.log(higherValue([2, 3, 6, 7, 10, 1]));

// 3.  Crie uma função que receba um array de inteiros e retorne o índice do menor valor. 

function lowerValue(array) {
  let keyLowerValue = 0

  for (key in array) {
    if (array[key] < array[keyLowerValue]) {
      keyLowerValue = key;
    }
  }
  return keyLowerValue;
}

console.log(lowerValue([2, 3, 6, 7, 10, 1]));

// 4. Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres. 

let arrayNames =  ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function longName(arrayNames) {
  let lengthName = arrayNames[0].length;
  let longestName = arrayNames[0];
  for (index in arrayNames) {
    if (arrayNames[index].length > lengthName) {
      lengthName = arrayNames[index].length;
      longestName = arrayNames[index];
    }
  }
  return longestName;
}

console.log(longName(arrayNames))

// 5. Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete. 

function calculateRepeatedNumber(arrayNumbers) {
  let mostRepeatedNumber = arrayNumbers[0];
  let amountRepeatedNumber = -1;
  let winAmountRepeatedNumber = 0

  for (numberToCompare of arrayNumbers) {
    for (numbersToBeCompared of arrayNumbers) {
      if (numberToCompare === numbersToBeCompared) {
        amountRepeatedNumber += 1
      }
    }
    if (amountRepeatedNumber > winAmountRepeatedNumber) {
      mostRepeatedNumber = arrayNumbers[numberToCompare];
      winAmountRepeatedNumber = amountRepeatedNumber;
    }
    amountRepeatedNumber = -1
  }
  return mostRepeatedNumber
}

console.log(calculateRepeatedNumber([2, 3, 2, 5, 8, 2, 3, 8, 8, 8, 8, 8, 8]));


// 6. Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N. 

function sumNumberN(numberN) {
  let sumN = 0;
  for (let index = 1; index <= numberN; index += 1) {
    sumN += index;
  }
  return sumN
}

console.log(sumNumberN(5))

// 7. Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word . 

function checkWordEnding(word, ending) {
  let areEndingsEqual = true; 

  for (let index = 0; index < ending.length; index += 1) {
    if (word[word.length - 1 - index] !== ending[ending.length - 1 - index]) {
      areEndingsEqual = false;
      break;
    }
  }

  return areEndingsEqual;
}

console.log(checkWordEnding('desenvolvimento', 'ssenvolvimento'));