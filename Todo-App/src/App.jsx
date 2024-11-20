import { useState } from "react";
import "./App.css";

function App() {
  const [listTodo, setlistTodo] = useState([]);

  function addTodo(text) {
    setlistTodo([...listTodo, text]);
  }

  return (
    <>
      <div className="main-container">
        <div className="center-container">
          <TodoInput addTodo={addTodo} />
        </div>
      </div>
    </>
  );
}

function TodoInput({addTodo}) {
  const [inputText, setInputText] = useState("");

  return (
    <div className="input-containeer">
      <input
        type="text"
        placeholder="Enter your todo"
        className="input-box-todo"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      <button className="add-btn" onClick={() => {
        addTodo(inputText);
        setInputText("");
        } }>
        +
      </button>
    </div>
  );
}



function TodoList(){

}

export default App;
