// Programa para calcular lucro, considerando valor de custo, valor de venda e imposto de 20%

let custo_produto = 200;
let valor_venda = 300;

let lucro = valor_venda - custo_produto - (custo_produto * 0.2)

if (custo_produto < 0 || valor_venda < 0) {
    console.log('Não foi possível definir o lucro')
} else {
    console.log('O valor do lucro foi de', 1000*lucro)
}

