import React from 'react';

class Fieldset extends React.Component {
  render() {
    const { forms } = this.props
    return (
      <fieldset>
        {forms.map((object) => (
        <div>
          <label className='form-label'>{ object.title }</label>
          <input 
            type={ object.type } 
            maxlength={ object.maxlength } 
            minlength={ object.minlength } 
            className='dados form-control' 
            name={ object.name } 
            required></input>
        </div>
        ))}
      </fieldset>
    )
  }
}

export default Fieldset;
