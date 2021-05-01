function add(num1, num2) {
  let higherLength = String(num1).length;
  let concatenatedSum = '';
  let array1 = [];
  let array2 = [];
  let arraySum = [];
  let divider1 = 10;
  let divider2 = 1;
  

  if (String(num2).length > higherLength) {
    higherLength = String(num2).length
  }

  for (let index = higherLength - 1; index >= 0; index -= 1) {
    if (index === higherLength - 1) {
      array1[index] = num1 % divider1;
      array2[index] = num2 % divider1;
      arraySum[index] = (array1[index] + array2[index]);
    } else {
      array1[index] = ((num1 % divider1) - (num1 % divider2)) / divider2;
      array2[index] = ((num2 % divider1) - (num2 % divider2)) / divider2;
      arraySum[index] = (array1[index] + array2[index]);
    }
    divider1 *= 10;
    divider2 *= 10;
  }

  for (let index = 0; index < higherLength; index += 1) {
    concatenatedSum += arraySum[index]
  }

  let answer = parseInt(concatenatedSum)
  
  return answer;
}

console.log(add(26,39))
console.log(typeof(add(26,39)))


function add(num1, num2) {
  let higherLength = String(num1).length;
  let concatenatedSum = '';
  let array1 = [];
  let array2 = [];
  let arraySum = [];
  let divider1 = 10;
  let divider2 = 1;
  

  if (String(num2).length > higherLength) {
    higherLength = String(num2).length
  }

  for (let index = higherLength - 1; index >= 0; index -= 1) {
    if (index === higherLength - 1) {
      array1[index] = num1 % divider1;
      array2[index] = num2 % divider1;
      arraySum[index] = (array1[index] + array2[index]);
    } else {
      array1[index] = ((num1 % divider1) - (num1 % divider2)) / divider2;
      array2[index] = ((num2 % divider1) - (num2 % divider2)) / divider2;
      arraySum[index] = (array1[index] + array2[index]);
    }
    divider1 *= 10;
    divider2 *= 10;
  }

  for (let index = 0; index < higherLength; index += 1) {
    concatenatedSum += arraySum[index]
  }

  let answer = parseInt(concatenatedSum)
  
  return answer;
}

console.log(add(26,39))
console.log(typeof(add(26,39)))