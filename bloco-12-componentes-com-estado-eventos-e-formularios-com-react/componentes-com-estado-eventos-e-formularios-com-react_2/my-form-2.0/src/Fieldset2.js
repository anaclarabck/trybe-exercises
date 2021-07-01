import React from 'react';

class FieldsetJob extends React.Component {
  render() {
    return (
      <fieldset>
        <h2 className='h3'>Dados do seu último emprego</h2>
        <div className='mb-3'>
          <label className='form-label'>Resumo do currículo:</label>
          <textarea cols="100" rows="5" maxlength="1000" className='dados form-control' name='resumo-curriculo' required></textarea>
        </div>
          
        <div className='mb-3'>
          <label className='form-label'>Cargo:</label>
          <input type='text' maxlength="40" className='dados form-control' name='cargo' required></input>
        </div>
          
        <div className='mb-3'>
          <label className='form-label'>Descrição do cargo:</label>
          <input type='text' maxlength="500" className='dados form-control' name='descricao-cargo' required></input>
        </div>
      </fieldset>
    )
  }
}

export default FieldsetJob;