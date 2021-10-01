import React from "react";
import { ToDoForm } from "./components/ToDoForm";
import { ToDoList } from "./components/ToDoList";
import { ListProvider } from "./contexts/ListContext";

function App() {
  return (
    <ListProvider>
      <ToDoForm />
      <ToDoList />
    </ListProvider>
  );
}

export default App;
