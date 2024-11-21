import { useState } from "react";
import "./App.css";

function App() {
  const [listTodo, setlistTodo] = useState([]);

  function addTodo(text) {
    if(text !== ""){
      setlistTodo([...listTodo, text]);
    }
  }

  return (
    <>
      <div className="main-container">
        <div className="center-container">
          <TodoInput addTodo={addTodo} />
          <div className="app-heading">Todo List</div>
          <hr />
          {listTodo.map((listItem, i) => {
            return <TodoList item={listItem} index={i} key={i} deleteItem = {() => deleteItem(i)}/>;
          })}
        </div>
      </div>
    </>
  );




  function deleteItem(key){
    let newList = [...listTodo];
    newList.splice(key, 1);
    setlistTodo(newList);
  }
}

function TodoInput({ addTodo }) {
  const [inputText, setInputText] = useState("");

  function handleEnterFunctionality(e) {
    if(e.key === "Enter"){
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

function TodoList(props) {
  return (
    <div className="list-item">
      {props.item}
      <span className="icons">
        {/* <i class="fa-solid fa-trash icon-delete" onClick={(e) => {
          // props.deleteItem(index);
        }}></i> */}
        <i className="fa-solid fa-trash icon-delete" onClick={() => props.deleteItem(props.index)}></i>
      </span>
    </div>
  );
}



export default App;
