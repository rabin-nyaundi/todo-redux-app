import React from 'react'
import './App.css'
import { hot } from 'react-hot-loader'
import TodoList from './components/Todo/TodoList'
import TodoForm from './components/form/TodoForm'

const App = () => {
    return (
        <div className="App">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-6 todos">
                        <TodoList />
                    </div>
                </div>
            </div>
        </div>
    
)}

export default hot(module)(App);