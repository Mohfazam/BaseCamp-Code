import { useState } from "react";
import "./App.css";

function App() {
  const [listTodo, setlistTodo] = useState([]);

  function addTodo(text) {
    if (text !== "") {
      setlistTodo([...listTodo, { text, completed: false }]);
    }
  }

  function toggleComplete(index) {
    const newList = [...listTodo];
    newList[index].completed = !newList[index].completed;
    setlistTodo(newList);
  }

  function deleteItem(key) {
    const newList = [...listTodo];
    newList.splice(key, 1);
    setlistTodo(newList);
  }

  return (
    <>
      <div className="main-container">
        <div className="center-container">
          <TodoInput addTodo={addTodo} />
          <div className="app-heading">Todo List</div>
          <hr />
          {listTodo.map((listItem, i) => (
            <TodoList
              item={listItem}
              index={i}
              key={i}
              deleteItem={() => deleteItem(i)}
              toggleComplete={() => toggleComplete(i)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

function TodoInput({ addTodo }) {
  const [inputText, setInputText] = useState("");

  function handleEnterFunctionality(e) {
    if (e.key === "Enter") {
      addTodo(inputText);
      setInputText("");
    }
  }

  return (
    <div className="input-containeer">
      <input
        type="text"
        placeholder="Enter your todo"
        className="input-box-todo"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={handleEnterFunctionality}
      />
      <button
        className="add-btn"
        onClick={() => {
          addTodo(inputText);
          setInputText("");
        }}
      >
        +
      </button>
    </div>
  );
}

function TodoList({ item, deleteItem, toggleComplete }) {
  return (
    <div
      className="list-item"
      style={{
        textDecoration: item.completed ? "line-through" : "none",
      }}
    >
      {item.text}
      <span className="icons">
      <i className="fa-solid fa-check" id="check-icon" onClick={toggleComplete}></i>
      <i className="fa-solid fa-trash icon-delete" onClick={deleteItem}></i>
      </span>
    </div>
  );
}

export default App;
