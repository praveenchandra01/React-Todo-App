import React from 'react'
import {TodoItems} from './TodoItems'

export const Todos = (props) => {
    let myStyle = {
        minHeight: "52vh"
    }
    return (
        <div className="container w-75" style={myStyle}>
            <h1 className="my-3">Todo's List</h1>
            {props.todos.length===0?<h3>No ToDo's to Display</h3>:props.todos.map((todo)=>{
                return (
            <TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete}/>
            ) })}
            
        </div>
    )
}
