import React from 'react'
import "../App.css"
import { useState } from 'react';

const TodoCreate = ({oncreateTodo}) => {

const [newTodo, setnewTodo] = useState("");


const create =()=>{
   if(!newTodo) return;

   const request = {
      id:Math.floor(Math.random()*9999999),
      content : newTodo
   }
   oncreateTodo(request);
   clearInput();

}

const clearInput =()=>{
  setnewTodo("");
}


  return (
    <div >
        <input  type='text' placeholder='Todo Giriniz' value={newTodo} onChange={(e)=>setnewTodo(e.target.value)} />
        <button onClick={create} type='submit'>Todo Oluştur</button>
    </div>
  )
}

export default TodoCreate