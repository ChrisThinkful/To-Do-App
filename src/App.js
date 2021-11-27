import React, { useState, useEffect } from 'react';
import './App.css';

// import components
import Form from './Components/Form';
import ToDoList from './Components/ToDoList';

function App() {

  // states
  const [inputText, setInputText] = useState('');
  const [toDos, setToDos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredToDos, setFilteredToDo] = useState([]);

  // handlers
  const filterHandler = () => {
    switch(status){
      case 'complete':
        setFilteredToDo(toDos.filter(todo => todo.completed === true))
        break;
      case 'incomplete':
        setFilteredToDo(toDos.filter(todo => todo.completed === false))
        break;
      default: 
        setFilteredToDo(toDos)
        break;
    }
  }

  // localstorage
  const saveLocalToDos = () => {
    localStorage.setItem('toDos', JSON.stringify(toDos))
  };

  const getLocalToDos = () => {
    if(localStorage.getItem('toDos') === null){
      localStorage.setItem('toDos', JSON.stringify([]));
    } else {
      let storedToDos = JSON.parse(localStorage.getItem('toDos'))
      setToDos(storedToDos)
    }
  };


  // load local storage, one time as load
  useEffect(() => {
    getLocalToDos();
  },[])

  // filters ToDos and updates localStorage
  useEffect(() => {
    filterHandler();
    saveLocalToDos()
  },[toDos, status])
  

  // render
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
        setStatus={setStatus}
      />
      <ToDoList 
      toDos={toDos}
      setToDos={setToDos}
      filteredToDos={filteredToDos}
      />
    </div>
  );
}

export default App;
