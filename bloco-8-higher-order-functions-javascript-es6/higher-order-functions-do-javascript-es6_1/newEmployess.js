const newEmployees = (nameEmployee) => {
  const employees = {
    id1: (nameEmployee) => addEmployee(), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: (nameEmployee) => addEmployee(),// Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: (nameEmployee) => addEmployee(),// Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  }
  return employees;
};

const teste = newEmployees('Pedro Guerra').addEmployee()

const addEmployee = (nameEmployee) => {
  const fileEmployee = {
    nomeCompleto: nameEmployee,
    email: `${nameEmployee}@trybe.com`
  }
  return fileEmployee
}

console.log(teste)