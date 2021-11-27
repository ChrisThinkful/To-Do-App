import React, { useState } from 'react';
import './App.css';

// components
import Form from './Components/Form';
import ToDoList from './Components/ToDoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [toDos, setToDos] = useState([])

  return (
    <div className="App">
      <header>
        Chris' To-Do List
      </header>
      <Form 
        toDos={toDos}
        setToDos={setToDos}
        inputText={inputText}
        setInputText={setInputText}
      />
      <ToDoList 
      toDos={toDos}
      />
    </div>
  );
}

export default App;
