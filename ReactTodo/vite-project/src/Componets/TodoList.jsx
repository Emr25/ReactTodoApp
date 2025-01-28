import React from 'react'
import Todo from './Todo'

const TodoList = ({todo,onDelete,onUpdate}) => {
  return (
    <div>
      {
        todo && todo.map((item)=>(
          <Todo key={item.id} todo = {item} onDelete = {onDelete} onUpdate ={onUpdate}  />
        ))
      }
    </div>
  )
}

export default TodoList