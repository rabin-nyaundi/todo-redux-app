import React from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import './TodoList.css';
import TodoForm from '../form/TodoForm';
import { completeTodo, removeTodo } from '../../redux/actions';

const TodoList = ({todos =[], onRemoveTodo, onCompleteTodo}) => {
    return (
        <div className="todo-list-wrapper row">
            <TodoForm />
            {todos.map((todo, index)=>(
                <TodoListItem 
                    key={index} 
                    todo={todo}
                    handleRemove={onRemoveTodo}
                    handleComplete={()=>onCompleteTodo(todo.text)}
                 />
            ))}
        </div>
    );
}

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    onRemoveTodo: text => dispatch(removeTodo(text)),
    onCompleteTodo: text => dispatch(completeTodo(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);