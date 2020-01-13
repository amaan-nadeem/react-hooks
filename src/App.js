import React from 'react';
import './App.css';
import ClassCounter from './components/classCounter';
import HookCounter from './components/functionalCounter';
import HookCounterTwo from './components/HookCounterTwo';

function App() {
  return (
    <div className="App">
      <div>
      <h1>Class Component Based Counter</h1>
      <ClassCounter/>
      </div>
      <div>
      <h1>Functional Component Based Counter</h1>
      <HookCounter/>
      </div>
      <div>
      <h1>Setting Functional Component Based Counter</h1>
      <HookCounterTwo/>
      </div>
    </div>
  );
}

export default App;
