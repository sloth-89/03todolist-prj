import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import { TodoProvider } from "./TodoContext";
import Button from "./Button";

const GlobalStyle = createGlobalStyle`
  body{
    background: #aed9c2;
  }
`;

function App(){
  return(
    <TodoProvider>
      <GlobalStyle/>
      {/* 브라우저 전체 바탕화면 영역 */}
      <TodoTemplate>
        <TodoHead/>
        <Button/>
        <TodoList/>
        <TodoCreate/>
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;