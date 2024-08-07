import React from "react";
import { useContext,createContext } from "react";

export const TodoContext = createContext({
    todos :[{
        id : 1,
        todo : "Todo msg",
        Completed : false,
    }],
    UpdateTodo : (id,todo)=>{ },
    AddTodo : (todo)=>{},
    DeleteTodo: (id)=>{},
    ToggleComplete: (id)=>{},
})

export const useTodo = ()=>{
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;