import React, { useState } from "react";
import styled, {css} from "styled-components";
import { MdAdd } from "react-icons/md";
import { useTodoDispatch, useTodoNextId } from "../TodoContext";

// 기본 컬러는 #38d9a9 그린색 / hover란, 마우스클릭시 #63e6be 좀더 밝게 / active란 , 클릭시 조금 어두운  #20c997 컬러적용하게
// #ff6b6b 빨간색 / #ff8787 hover 시 좀더 밝게 / #fa5252 클릭식 조금 어둡게
// z-index: 5; 다른 내용을 가려야 해서
// transition: 0.125s 초 동안 지속
// transform: translate(-50%, 50%) : CircleButton이 자식인 absolute이고, TodoTemplateBlock이 relative 부모로, 부모기준으로 중앙배치되게
// rotate(45deg) 45도 돌게

const CircleButton = styled.button`
    background: #38d9a9a;
    &:hover{
        background: #63e6be;
    }
    &:active{
        background: #20c997;
    }

    z-index: 5;
    cursor: pointer;
    width 80px;
    height: 80px;
    display: block;
    align-items: center;
    justify-content: center;
    font-size: 60px;
    position: absolute;
    left: 50%;
    bottom: 0px;
    transform: translate(-50%, 50%);
    color: white;
    border-radius: 50%;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.125s all ease-in;
    ${props => props.open &&
        css`
            background: #ff6b6b;
            &:hover{
                background: #ff8787;
            }
            &:active{
                background: $fa5252;
            }
            transform: translate(-50%, 50%) rotate(45deg);
        `}
`;

const InsertFormPositioner = styled.div`
    width: 100%;
    bottom: 0;
    left: 0;
    position: absolute;
`;

const InsertForm = styled.form`
    background: #f8f9fa;
    padding-left: 32px;
    padding-top: 32px;
    padding-right: 32px;
    padding-bottom: 72px;

    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    width: 100%;
    outline: none;
    font-size: 18px;
    box-sizing: border-box;
`;

function TodoCreate(){

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');

    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();

    const onToggle = () => {setOpen(!open)};
    const onChange = e => {setValue(e.target.value)}; // event 함수로 value값 타겟을 잡아 setValue로 바꿔서 공백이었던 기존값을 업데이트 해준다.
    // e.target.속성 을 불러와서 사용이 가능해진다.
    const onSubmit = e => {
        e.preventDefault(); // 새로고침 되면서 데이터가 날라가는 것 방지
        dispatch({
            type: 'CREATE',
            todo: {
                id: nextId.current, // current는 현재 값. useRef(5)
                text: value,
                done: false
            }
        });
        setValue(''); // 입력 후 초기값(공백)으로 다시 돌아오게 해줘야 한다.
        setOpen(false); // open 값도 제출 후 초기값(false)로 다시 돌아오게 한다.
        nextId.current += 1; // 순서대로 다음 배열에 입력되어야하니까 +=1을 통해 useRef(5)의 값에 +1을 해준다. 
    };

    return(
        <>
            {open && (
                <InsertFormPositioner>
                    <InsertForm onSubmit={onSubmit}>
                        <Input 
                            autoFocus 
                            placeholder="할 일을 입력 후, Enter를 누르세요"
                            onChange={onChange}
                            value={value}
                        />
                    </InsertForm>
                </InsertFormPositioner>
            )}
            <CircleButton onClick={onToggle} open={open}>
                <MdAdd/>
            </CircleButton>
        </>
    )
}

export default TodoCreate;