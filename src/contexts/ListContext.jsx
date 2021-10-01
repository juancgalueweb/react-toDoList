import React, { createContext, useState } from "react";

export const ListContext = createContext();

export const ListProvider = ({ children }) => {
  const [list, setList] = useState([
    // { title: "", description: "", priority: "", status: false },
  ]);
  return (
    <ListContext.Provider value={{ list, setList }}>
      {children}
    </ListContext.Provider>
  );
};
