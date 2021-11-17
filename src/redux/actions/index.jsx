import { REMOVE_TODO, CREATE_TODO, COMPLETE_TODO } from "../types/types";

export const createTodo = text =>({
    type: CREATE_TODO,
    payload: { text }
})

export const removeTodo = text => ({
    type: REMOVE_TODO,
    payload: { text }
})

export  const completeTodo = text => ({
    type: COMPLETE_TODO,
    payload: { text }
})