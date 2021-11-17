import React, { useState } from "react"
import './TodoListItem.css'

function TodoListItem({todo, handleRemove, handleComplete}) {

    // const [isComplete, setIsComplete] = useState(false);
    console.log(todo)
    return (
        <div className="container-fluid">
            <div className="todo-item">
                <div className="row">
                    <h6>{todo.text}</h6>
                    <div className="content">
                        <h6>{todo.isComplete ? 
                        <><span className="badge bg-success">Completed</span></> : null}</h6>
                        <div className="right">
                            {todo.isComplete ? null : 
                             <button 
                                onClick={()=>{
                                    handleComplete(todo.text)
                                }}
                                className="btn btn-outline-success m-1"
                            >
                                Complete
                            </button> 
                            }
                            <button 
                                onClick={() => handleRemove(todo.text)}
                                className="btn btn-danger m-1"
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoListItem
