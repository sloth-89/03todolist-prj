import React, { createContext, useReducer, useRef } from "react";

// useReducer 는 state, dispatch로 reducer 함수가 type을 받아서 switch case로 종류를 따져서 적용해준다.
// createContext와 useContext 는 중간 컴포넌트가 너무 많을 떄 도착지로 바로 전달하기 위해 사용.
// useRef 는 
// 1. id 값 +1을 자동으로 처리해줄때 
// 즉, 데이터가 하나씩 추가되어야할 때 추가를 시작할 배열의 id 값을 넣어서 그 값부터 추가가 되도록한다.
// 예를 들어 users 배열에 user가 3명이면 id 값이 4부터 새로운 user가 추가되어야하니까 값을 4로 넣어준다. useRef(4)
// 2. input 창의 포커스가 잡히는 위치값을 지정할 때

const initialTodos = [
    {
        id: 1,
        text: "오전 7시 기상하기",
        done: true
    },
    {
        id: 2,
        text: "오전 9시 리액트 공부하기",
        done: true
    },
    {
        id: 3,
        text: "오후 3시 운동하기",
        done: false
    },
    {
        id: 4,
        text: "오후 4시 자격증 공부",
        done: false
    }
];

function todoReducer(state, action){
    switch(action.type){
        case 'CREATE':
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map(todo =>
                 todo.id === action.id ? {...todo, done: !todo.done} : todo);
        case 'REMOVE':
            return state.filter(todo =>
                todo.id !== action.id);
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({children}){
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(5);

    return(
        <TodoStateContext.Provider value={state}>

        </TodoStateContext.Provider>
    )
}

// export default TodoProvider;