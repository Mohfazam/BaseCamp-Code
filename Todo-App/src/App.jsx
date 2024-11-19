import { useState } from 'react';
import './App.css';

function TodoItem() {
  const [todo, setTodo] = useState(''); 
  const [todos, setTodos] = useState([]); 

  
  function handleInputChange(e) {
    setTodo(e.target.value);
  }

  
  function addTodo() {
    if (todo.trim()) {
      setTodos([...todos, todo]); 
      setTodo(''); 
    }
  }


  function deleteTodo(index){
    setTodos(todos.filter((_, i) => i != index));
  }

  return (
    <div>
      <p>Todo List</p>
      <input
        type="text"
        placeholder="Enter a task"
        value={todo}
        onChange={handleInputChange}
      />
      <button onClick={addTodo}>Add Task</button>

      <ul>
        {todos.map((task, index) => (
          <li key={index} style={{border: '1px solid black'}}>
            {task}   <br />
            <button onClick={() => deleteTodo(index)}>Delete</button>
            
          </li>
          
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <>
      <TodoItem />
    </>
  );
}

export default App;
