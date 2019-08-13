import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Projects />
    </div>
  );
}

export default App;
