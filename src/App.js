import React, { useState } from "react";
import { ToDoForm } from "./components/ToDoForm";
import { ToDoList } from "./components/ToDoList";

function App() {
  const [toDoList, setToDoList] = useState([]);
  return (
    <>
      <ToDoForm toDoList={toDoList} setToDoList={setToDoList} />
      <ToDoList list={toDoList} setToDoList={setToDoList} />
    </>
  );
}

export default App;
