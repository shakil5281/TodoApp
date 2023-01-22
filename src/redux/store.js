import { configureStore } from "@reduxjs/toolkit";
import todoreduser from './state/todoSlice'
import { addTodo, revomeTodo,editTodo } from "./state/todoSlice";


const store  = configureStore({
    reducer: {
        todoapp: todoreduser
    }
})

export {
    store,
    addTodo,
    revomeTodo,
    editTodo
}

