const calculateFatorial = (numberX) => {
  let fatorialNumber = 1;
  for (let index = numberX; index > 1; index -= 1) {
    fatorialNumber = index * fatorialNumber;
  }
  return fatorialNumber
}

console.log(calculateFatorial(5))

const calculateFatorial2 = number => (number > 1) ? number * (calculateFatorial2(number - 1)) : 1;

console.log(calculateFatorial2(5))