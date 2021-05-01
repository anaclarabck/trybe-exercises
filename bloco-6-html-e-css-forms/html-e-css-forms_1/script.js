const brazilStates = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Paraná', 'Paraíba', 'Pará', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondonia', 'Roraima', 'Santa Catarina', 'Sergipe', 'São Paulo', 'Tocantins']

const statesRelation = document.getElementById('relacao-estados')
const buttonSendForm = document.getElementById('enviar-formulario')

for (let index = 0; index < brazilStates.length; index += 1) {
  let state = document.createElement('option');
  state.innerText = brazilStates[index];
  statesRelation.appendChild(state);
}

function checkingDate() {
  let inputDateBeggining = document.getElementById('data-de-inicio').value
  let arrayDate = inputDateBeggining.split('/')
  let checkDate = true
  let textWrongDate = ''
  
  if (arrayDate.length !== 3 || inputDateBeggining.length !== 10) {
    checkDate = false
    textWrongDate = 'Data inválida. Insira no formato dd/mm/aaa'
  } else {
    for (let index = 0; index < arrayDate.length; index += 1) {
      arrayDate[index] = Number(arrayDate[index])
      if (arrayDate[0] < 0 || arrayDate[0] > 31) {
        checkDate = false;
        textWrongDate = 'Data inválida'
      }
      if (arrayDate[1] < 0 || arrayDate[1] > 12) {
        checkDate = false;
        textWrongDate = 'Data inválida'
      }
      if (arrayDate[2] < 0 || arrayDate[2] > 2021) {
        checkDate = false;
        textWrongDate = 'Data inválida'
  } } }

  // if (checkDate === false) {
  //   alert(textWrongDate)
  // }
  return textWrongDate
}

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

