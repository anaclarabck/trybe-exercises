// Programa para verificar se, dentre três numeros, ao menos um é ípar

let num1 = 100;
let num2 = 200;
let num3 = 300;

let eh_par1 = num1 % 2; 
let eh_par2 = num2 % 2; 
let eh_par3 = num3 % 2; 

let verificao_impar = eh_par1 + eh_par2 + eh_par3;

if (verificao_impar > 0) {
    console.log(true);
} else {
    console.log(false);
}