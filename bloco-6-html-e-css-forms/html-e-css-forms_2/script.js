const brazilStates = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Paraná', 'Paraíba', 'Pará', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondonia', 'Roraima', 'Santa Catarina', 'Sergipe', 'São Paulo', 'Tocantins']

const statesRelation = document.getElementById('relacao-estados')
const buttonSendForm = document.getElementById('enviar-formulario')

for (let index = 0; index < brazilStates.length; index += 1) {
  let state = document.createElement('option');
  state.innerText = brazilStates[index];
  statesRelation.appendChild(state);
}

let newData = document.getElementById('myInputId').DatePickerX.init();

function createDiv() {
  console.log('teste')
  let teste = document.getElementsByClassName('dados')
  console.log(teste)
  let newdiv = document.getElementById('resumo')

  for (let index = 0; index < teste.length; index += 1) {
    let dados = document.createElement('li')
    dados.className = 'resumo-dados'
    dados.innerText = teste[index].name + ': ' + teste[index].value
    newdiv.appendChild(dados)
  }
}

buttonSendForm.addEventListener('click', function(event) {
  createDiv()
  event.preventDefault()
  if (checkingDate() !== '') {
    alert(textWrongDate)
    event.preventDefault()
  } 
});

