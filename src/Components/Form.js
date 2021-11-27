import React from 'react';



function Form({ inputText, setInputText, toDos, setToDos, setStatus }) {

    // handlers
    const toDoHandler = ({ target }) => {
        setInputText(target.value)
    };
    const submitHandler = (e) => {
        e.preventDefault()
        setToDos([
            ...toDos, {
                text: inputText,
                completed: false,
                id: Math.random() * 1000
            }
        ]);
        setInputText('')
    };
    const statusHandler = ({target}) => {
        setStatus(target.value)
    }

    // render
    return (
        <form>
            <input 
                value={inputText}
                onChange={toDoHandler} 
                type="text" 
                className='todo-input'
            />
            <button onClick={submitHandler} className="todo-button" type='submit'>
            <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="complete">Complete</option>
                <option value="incomplete">Incomplete</option>
                </select>
            </div>
        </form>
    )
}

export default Form
