import React, { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [inputText, setInputText] = useState("");

  function handleInput(event) {
    const newItem = event.target.value;
    setInputText(newItem);
  }

  function addItem() {
    setList(prevList => {
      return [...prevList, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleInput} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((item) => <li key={list.indexOf(item)}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
