"use client";

import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const toggle = () => {
    setMode((prev) => (prev === "light" ? " dark" : "light"));
  };

  return (
    <>
      <ThemeContext.Provider value={{ toggle, mode }}>
        <div className={`theme ${mode}`}>{children}</div>
      </ThemeContext.Provider>
    </>
  );
};

export default ThemeProvider;
export { ThemeContext };
