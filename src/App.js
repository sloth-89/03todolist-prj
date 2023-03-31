import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";

const GlobalStyle = createGlobalStyle`
  body{
    background: #aed9c2;
  }
`

function App(){
  return(
    <>
      <GlobalStyle/>
      <TodoTemplate>
        <TodoHead/>
        <TodoList/>
      </TodoTemplate>
    </>
  )
}

export default App;