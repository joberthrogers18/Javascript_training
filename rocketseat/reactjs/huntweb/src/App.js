import React, { Component } from 'react';
import Header from './components/Header';

import './styles.css';
import Main from './pages/main';
import Routes from './routes';

const App = () => (
  <div className="App">
    <Header/> 
    <Routes/>
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
