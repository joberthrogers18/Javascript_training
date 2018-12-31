import React, { Component } from 'react';
import Header from './components/Header';

import './styles.css';

const App = () => (
  <div className="App">
    <Header/> 
  </div>
);

// O de cima é a mesma coisa que o de baixo, chamado de stateless component
/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1> 
      </div>
    );
  }
}*/

export default App;
