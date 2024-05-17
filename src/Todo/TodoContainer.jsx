import React, { useState } from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

const TodoContainer = () => {
  const [todos, setTodos] = useState([
    {
      id:1,
      title:"할 일1",
      content: "할 일1 내용",
      isDone: false,
    },
  ]);
  
  return (
    <div>
      <TodoForm  setTodos={setTodos}/>
      <div>
        <TodoList />
        <TodoList />
      </div>
    </div>
  )
}

export default TodoContainer
