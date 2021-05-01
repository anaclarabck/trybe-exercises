// Programa para verificar se, dentre três numeros, ao menos um é par

let num1 = 101;
let num2 = 201;
let num3 = 301;

let eh_par1 = num1 % 2; 
let eh_par2 = num2 % 2; 
let eh_par3 = num3 % 2; 

let verificao_par = eh_par1 + eh_par2 + eh_par3

if (verificao_par < 3) {
    console.log(true);
} else {
    console.log(false);
}