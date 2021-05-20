const searchEmployee = require('./exercicioBonus');

describe('Testa a função searchEmployee:', () => {
  it('Testa se a função searchEmployee é definida', () => {
    expect(searchEmployee).toBeDefined();
  });
  it('Testa se searchEmployee é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  it('Testa se ao receber determinada id e detail, tem o retorno esperado', () => {
    expect(searchEmployee('9852-2-2', 'specialities')).toEqual(['Ruby', 'SQL']);
    expect(searchEmployee('4678-2', 'firstName')).toBe('Paul');
    expect(searchEmployee('1256-4', 'lastName')).toBe('Bezos');
  });
  it('Testa se ao receber id ou detail inexistente, receberá a respectiva mensagem de erro', () => {
    expect(searchEmployee('12345', 'specialities')).toBe('ID não identificada');
    expect(searchEmployee('8579-6', 'responsibility')).toBe('Informação indisponível');
    
  })
})