const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedo Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: callback('Luiza Drumond'),// Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: callback('Carla Paiva'),// Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  }
  return employees;
};

const addEmployee = (nameEmployee) => {
  const fileEmployee = {
    nomeCompleto: nameEmployee,
    email: `${nameEmployee.toLowerCase().split(' ').join('')}@trybe.com`
  }
  return fileEmployee
}

const teste = newEmployees(addEmployee)
console.log(teste)
