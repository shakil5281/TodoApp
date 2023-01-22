import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        value: []
    },
    reducers: {
        addTodo: (state, action) =>{
            state.value.push(action.payload) 
        },
        revomeTodo: (state, action) =>{
            state.value.splice(action.payload, 1) 
        },
        editTodo: (state, action) =>{
            state.value.splice(action.payload['index'], 1, action.payload['task']) 
        },
    }
})


export const  {addTodo, revomeTodo,editTodo} = todoSlice.actions
export default  todoSlice.reducer