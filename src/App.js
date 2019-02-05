import React, { Component } from 'react';
import FormContainer from './components/FormContainer';
import './App.css';
import FormButton from './components/FormButton';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <FormContainer />
        <FormButton />
      </React.Fragment>
    );
  }
}

export default App;
