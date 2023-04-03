import React from "react";
import styled, {css} from "styled-components";
import {MdDone, MdDeleteForever} from "react-icons/md";

// CheckCircle 컴포넌트는 좌측의 체크할 수 있는 공간의 동그라미
const CheckCircle = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    border: 1px solid #ced4da;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    ${props => props.done &&
        css`
            border: 1px solid #38d9e9;
            color: #38d9e9;
        `}
`;

// to-do 해야할 일 작성한 내용인 텍스트 컴포넌트
const Text = styled.div`
    flex: 1;
    font-size: 21px;
    color: #495057;
    ${props => props.done &&
        css`
            color: #ced4da;
        `}
`;

// Remove 컴포넌트는 우측의 쓰레기통 아이콘을 보여줌
const Remove = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    &:hover{
        color: #ff6b6b;
    }
    display: none;
`;

// 위 3개의 컴포넌트를 담을 부모 컴포넌트 css 스타일
const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    &:hover{
        ${Remove}{
            display: initial;
        }
    }
`; // block을 하위 요소들 밑에 넣어주어야 확실하게 표현된다.

function TodoItem({id, done, text}){

    return(
        <div>
            <TodoItemBlock>
                <CheckCircle done={done}>
                    {done && <MdDone/>}
                </CheckCircle>
                <Text done={done}>
                    {text}
                </Text>
                <Remove>
                    <MdDeleteForever/>
                </Remove>
            </TodoItemBlock>        
        </div>
    )
}

export default TodoItem;