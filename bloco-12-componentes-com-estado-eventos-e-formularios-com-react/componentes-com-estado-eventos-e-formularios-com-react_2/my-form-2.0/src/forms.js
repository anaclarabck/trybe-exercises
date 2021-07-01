const forms = [
  {
    title: 'Nome:',
    name: 'name',
    type: 'text', 
    maxlength: 40,
    required: true,
  },
  {
    title: 'E-mail:',
    name: 'email',
    type: 'text', 
    maxlength: 50,
    required: true,
  },
  {
    title: 'CPF:',
    name: 'cpf',
    type: 'text', 
    minlength: 11,
    maxlength: 11,
    required: true,
  },
  {
    title: 'Endereço:',
    name: 'adress',
    type: 'text', 
    maxlength: 200,
    required: true,
  }
]

export default forms;