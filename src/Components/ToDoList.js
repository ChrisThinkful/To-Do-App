import React from 'react';
import ToDo from './ToDo'

function ToDoList({ toDos }) {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {toDos.map(toDo => (
                     <ToDo 
                     text={toDo.text}
                     completed={toDo.completed}
                     />
                ))}
            </ul>
        </div>
    )
}

export default ToDoList
