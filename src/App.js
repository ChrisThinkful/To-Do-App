import React from 'react';
import './App.css';

// components
import Form from './Components/Form';
import ToDoList from './Components/ToDoList';

function App() {
  return (
    <div className="App">
      <header>
        Chris' To-Do List
      </header>
      <Form />
      <ToDoList />
    </div>
  );
}

export default App;
