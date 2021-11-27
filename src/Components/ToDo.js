import React from 'react'

function ToDo({ text, toDo, toDos, setToDos }) {

    // handlers
    const deleteHandler = () => {
        setToDos(toDos.filter(element => element.id !== toDo.id))
    };
    const completeHandler = () => {
        setToDos(toDos.map((item) => {
            if(item.id === toDo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    };

    // render
    return (
        <div className='todo'>
            {/* Add a className depending on completed status for styling */}
            <li className={`todo-item ${toDo.completed ? 'completed': ''}`}>{text}</li>
            <button onClick={completeHandler} className='complete-btn'>
                <i className='fas fa-check'></i>
            </button>
            <button onClick={deleteHandler} className='trash-btn'>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    )
}

export default ToDo
