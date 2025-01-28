import React, { useState } from 'react'


const Todo = ({todo,onDelete,onUpdate}) => {


const [edit, setedit] = useState(false);
const [newTodo, setnewTodo] = useState(todo.content);



const removeTodo =()=>{
  onDelete(todo.id);
}

const updateTodo =()=>{
  const request = {
    id : todo.id,
    content : newTodo
  }
   onUpdate(request);
   setedit(false);
}


return (
  <div>
    {edit ? (
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setnewTodo(e.target.value)}
      />
    ) : (
      todo.content
    )}
    <a>
      <button onClick={removeTodo} style={{ backgroundColor: 'red' }}>
        Sil
      </button>
    </a>
    {edit ? (
      <button style={{ backgroundColor: 'green' }} onClick={updateTodo}>
        Checked
      </button>
    ) : (
      <button
        style={{ backgroundColor: 'yellow' }}
        onClick={() => setedit(true)}
      >
        Güncelle
      </button>
    )}
  </div>
)
}

export default Todo