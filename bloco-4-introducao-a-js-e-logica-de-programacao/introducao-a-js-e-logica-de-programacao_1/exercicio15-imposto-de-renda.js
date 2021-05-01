// Programa para calcular o salário líquido, dado o salário bruto, descontando INSS e IR

let salario_bruto = 3000;
let valor_ir = 0;
let valor_inss = 0;

if (salario_bruto <= 1556.94 && salario_bruto > 0) {
    valor_inss = salario_bruto * 0.08;
} else if (salario_bruto <= 2594.92) {
    valor_inss = salario_bruto *  0.09;
} else if (salario_bruto <= 5189.82) {
    valor_inss = salario_bruto * 0.11;
} else {
    valor_inss = 570.88;
}

let salario_base = salario_bruto - valor_inss;

if (salario_base <= 1903.98) {
    valor_ir = 0
} else if (salario_base <= 2826.66) {
    valor_ir =  salario_base * 0.075 - 142.8;
} else if (salario_base <= 3751.05) {
    valor_ir =  salario_base * 0.15 - 354.8;
} else if (salario_base <= 4664.68) {
    valor_ir =  salario_base * 0.225 - 636.13;
} else if (salario_base > 4664.08) {
    valor_ir =  salario_base * 0.275 - 869.36;
}

let salario_liquido = salario_base - valor_ir;

console.log('O valor do salário líquido é de', salario_liquido);