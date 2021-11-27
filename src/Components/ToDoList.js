import React from 'react';
import ToDo from './ToDo'

function ToDoList({ toDos, setToDos, filteredToDos }) {

    // render
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredToDos.map(toDo => (
                     <ToDo 
                     key={toDo.id}
                     text={toDo.text}
                     toDo={toDo}
                     toDos={toDos}
                     setToDos={setToDos}
                     />
                ))}
            </ul>
        </div>
    )
}

export default ToDoList
