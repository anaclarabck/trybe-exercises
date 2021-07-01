import React from 'react';
import './App.css';
import Fieldset from './Fieldset1';
import FieldsetJob from './Fieldset2';
import Forms from './forms'

class App extends React.Component {
  render() {
    return (
      <body className="App">
        <header>
        </header>
        <form>
          <Fieldset forms={ Forms }/>
          <FieldsetJob />
        </form>
      </body>
    );
  }
}

export default App;
