import React, { useState } from "react";
import { connect } from "react-redux";
import './Form.css';

import { createTodo, removeTodo } from "../../redux/actions";


function TodoForm({todos, oncreateTodo, onRemoveTodo}) {

    const [todo, setTodo] = useState([]);
    return (
        <div className="form">
            <div className="input-group mb-3 p-3">
                <input 
                    type="text" 
                    className="form-control" 
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    placeholder="Enter todo here " 
                />
                <button 
                    onClick={() => {
                        const isDuplicate = todos.some(todo => todo.text === todo);
                        if(!isDuplicate){
                            oncreateTodo(todo)
                            setTodo([])
                        }
                    } }
                    className="btn btn-outline-primary"
                >
                    Save Todo
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    todos: state.todos,
})

const mapDispatchToProps = (dispatch) => {
    return {

        oncreateTodo: text => dispatch(createTodo(text)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
