import { useState } from 'react'

import './App.css'


function TodoItem(){
  const [todo, setTodo] = useState({});

  function addTodo(e){
    const todoDes = e.target.value;
    setTodo({...todo, todoDes});
  }
  return(
    <div>
      <p>Todo List</p>
      <input type="text" placeholder='Enter a task' onChange = {addTodo}/>
      <button >Add Task</button>
    </div>
  )
}

function App() {
  

  return (
    <>
      <TodoItem />
      
    </>
  )
}

export default App
