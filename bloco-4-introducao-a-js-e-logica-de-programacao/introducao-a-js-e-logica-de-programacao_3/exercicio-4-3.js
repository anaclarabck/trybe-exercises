// Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo

let n = 5;
let asterisks = '';

for (let lines = 1; lines <= n; lines += 1) {
  for (let columns = 1; columns <= n; columns += 1) {
    asterisks += '*'
  }
  console.log(asterisks);
  asterisks = '';
}

// Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.  

asterisks = '';

for (let lines = 1; lines <= n; lines += 1) {
  asterisks += '*'
  console.log(asterisks);
}

// Agora inverta o lado do triângulo.

asterisks = '';

for (let lines = 1; lines <= n; lines +=1) {
  for (let columns = 1; columns <= n; columns += 1) {
    if (lines + columns <= n) {
      asterisks += ' ';
    } else {
      asterisks += '*'
    }
  }
  console.log(asterisks);
  asterisks = ''; 
}

// Depois, faça uma pirâmide com n asteriscos de base

asterisks = '';
let middle = (n/2) + 0.5;
let left = middle;
let right = middle;

for (let lines = 1; lines <= n; lines +=2) {
  for (let columns = 1; columns <= n; columns += 1) {
    if (columns === middle) {
      asterisks += '*';
    } else if (left <= columns && right >= columns) {
      asterisks += '*';
    } else {
      asterisks += ' ';
    }
  }
  console.log(asterisks);
  asterisks = ''
  left -= 1;
  right += 1;
}
