import React from 'react'

function Form() {
    return (
        <form>
            <input type="text" className='todo-input'/>
            <button className="todo-button" type='submit'>
                +
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Complete</option>
                <option value="uncompleted">Incomplete</option>
                </select>
            </div>
        </form>
    )
}

export default Form
