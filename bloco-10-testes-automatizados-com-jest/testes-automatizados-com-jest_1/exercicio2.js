// encode e decode
function translator(character, dictionary) {
  for (let key of Object.keys(dictionary)) {
    if (character === key) {
      return dictionary[key];
    }
  }
  return character;
}

function encode(sentence) {
  let objectVowels = { a: '1', e: '2', i: '3', o: '4', u: '5' };
  let encodedSentence = '';

  for (let index = 0; index < sentence.length; index += 1) {
    encodedSentence += translator(sentence[index], objectVowels);
  }
  return encodedSentence;
}

function decode(sentence) {
  let objectNumbers = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  let decodedSentence = '';

  for (let index = 0; index < sentence.length; index += 1) {
    decodedSentence += translator(sentence[index], objectNumbers);
  }
  return decodedSentence;
}

// A função techList recebe como parâmetros um array contendo uma lista de tecnologias e uma string com um nome. Para cada tecnologia no array a função cria, em ordem alfabética, um objeto com a seguinte estrutura: 
// {
//   tech: 'nomeTecnologia',
//   name: name,
// }
// Implemente a função techList a partir dos testes abaixo. Experimente refatorar a função que você criou para esse projeto! É importante nunca alterar os testes ou as variáveis já escritas no código . 

function techList(arrayTech, name) {
  if (!arrayTech) {
    return 'Vazio!';
  }
}

module.exports = {
  translator,
  encode,
  decode,
  techList
}