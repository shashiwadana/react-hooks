import React from 'react';
import logo from './logo.svg';
import './App.css';
import UseStateHook from './components/UseStateHook';
import UseState2 from './components/UseState2';
import ArrayUseState from './components/ArrayUseState';
import UseEffect from './components/UseEffect';

function App() {
  return (
    <div className="App">
     <UseStateHook />
     <UseState2 />
     <ArrayUseState />
     <UseEffect />
    </div>
  );
}

export default App;
