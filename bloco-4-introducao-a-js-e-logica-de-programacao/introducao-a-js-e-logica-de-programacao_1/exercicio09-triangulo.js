// Programa para verificação se três medidas de ângulos internos compoem um triângulo

let angulo1 = 80;
let angulo2 = 45;
let angulo3 = 45;
let soma = angulo1 + angulo2 + angulo3;
let triangulo;

if (soma === 180) {
    triangulo = true
    console.log(triangulo);
} else if (soma > 0) {
    triangulo = false;
    console.log(triangulo);
} else {
    triangulo = 'error'
    console.log(triangulo)
}