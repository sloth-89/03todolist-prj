import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useTodoState } from "../TodoContext";

// TodoListBlock 영역확인을 위해 하단에 배경을 넣어 체크 후 삭제하기
// background: gray - 사이즈 조정 확인용
const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`;

// function TodoList(){
//     return <TodoListBlock>TodoList</TodoListBlock>
// }

// function TodoList(){
//     return(
//         <TodoListBlock>
//            <TodoItem text="9시 기상하기" done={true}/>
//            <TodoItem text="12시 점심먹기" done={true}/>
//            <TodoItem text="15시 코딩하기" done={false}/>
//            <TodoItem text="17시 운동하기" done={false}/>
//         </TodoListBlock>
//     )
// }

function TodoList(){
    const todos = useTodoState();

    return(
        <TodoListBlock>
           {todos.map(todo => (
            <TodoItem 
                key={todo.id}
                id={todo.id}
                text={todo.text}
                done={todo.done}
            />
           ))}
        </TodoListBlock>
    );
}

export default TodoList;