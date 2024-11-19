import { useState } from 'react';
import './App.css';

function TodoItem() {
  const [todo, setTodo] = useState(''); // To hold the input value
  const [todos, setTodos] = useState([]); // To hold the list of tasks

  // Update input value
  function handleInputChange(e) {
    setTodo(e.target.value);
  }

  // Add a task to the list
  function addTodo() {
    if (todo.trim()) {
      setTodos([...todos, todo]); // Append task to list
      setTodo(''); // Clear input field
    }
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
          <li key={index}>{task}</li>
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
