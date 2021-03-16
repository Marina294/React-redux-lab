import React, { Component } from 'react';

import Persons from './containers/Persons';
import Count from './containers/Count'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Count />
        <Persons />
      </div>
    );
  }
}

export default App;
