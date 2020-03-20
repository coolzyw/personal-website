import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./component/header";
import Home from "./component/home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Header className="App-bar"> </Header>
          <Home> </Home>
      </header>

    </div>
  );
}

export default App;
