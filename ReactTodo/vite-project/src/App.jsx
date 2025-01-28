import React, { useState } from 'react'
import TodoCreate from './Componets/TodoCreate'
import TodoList from './Componets/TodoList'

import './App.css'

const App = () => {

const [todos, settodos] = useState([]);


const createTodo =(newTodo)=>{
     settodos([...todos,newTodo]);
}


const removeTodo =(id)=>{
   settodos([...todos.filter((todo)=>todo.id !== id)]);
}

const updateTodo =(newTodo)=>{

    const updatedTodo =  todos.map((todo)=>{
        if(todo.id !== newTodo.id){
          return todo;
        }

        return newTodo;
     })
settodos(updatedTodo);
}

  return (
    <div className='app'>
      <TodoCreate  oncreateTodo={createTodo}  />
      <TodoList todo={todos} onDelete = {removeTodo}  onUpdate = {updateTodo}/>
    </div>
  )
}

export default App