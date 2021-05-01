const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1  Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const addToObject = (object, key, value) => object[key] = value;
addToObject(lesson2, 'turno', 'manhã');

// 2 Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro. 
const listObjectKeys = (object) => Object.keys(object);

// 3 Crie uma função para mostrar o tamanho de um objeto. 
const showLengthOBject = (object) => Object.keys(object).length;

// 4 Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro. 
const listObjectValues = (object) => Object.values(object);

// 5 Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3.
const allLessons = {};
const createAnObject = (object) => Object.assign(object, {lesson1, lesson2, lesson3});

createAnObject(allLessons);

// 6 Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas. 
const sumStudents = (object) => {
  let totalStudents = 0;

  for (let index = 0; index < Object.keys(object).length; index += 1) {
    totalStudents += (Object.values(object)[index]).numeroEstudantes;
  }
  return totalStudents;
}

sumStudents(allLessons);

// 7 Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
const getValueByNumber = (object, index) => Object.values(object)[index];

// 8 Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave

const verifyPair = (object, key, value) => object[key] === value;

// Bônus 
// 1 Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

const sumStudentsPerSubject = (object, subject) => {
  let studentsPerSubject = 0;

  for (let index = 0; index < Object.keys(object).length; index += 1) {
    if ((Object.values(object)[index]).materia === subject) {
      studentsPerSubject += (Object.values(object)[index]).numeroEstudantes;
    }
  }
  return studentsPerSubject;
}

// 2 Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5.

const createReport = (object, teacher) => {
  let arraySubject = []
  let studentsPerTeacher = 0
  
  for (let index = 0; index < Object.keys(object).length; index += 1) {
    if ((Object.values(object)[index]).professor === teacher) {
      arraySubject.push((Object.values(object)[index]).materia);
      studentsPerTeacher += (Object.values(object)[index]).numeroEstudantes;
    }
  }
  const reportTeacher = {
    'professor': teacher,
    'aulas': arraySubject,
    'estudantes': studentsPerTeacher
  }
  return reportTeacher;
}

console.log(createReport(allLessons, 'Maria Clara'));