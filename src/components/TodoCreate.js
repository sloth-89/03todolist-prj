import React from "react";
import styled from "styled-components";
import { MdAdd } from "react-icons/md";

const CircleButton = styled.div`
    background: #38d9a9a;
`;

function TodoCreate(){
    return(
        <div>
            <CircleButton>
                <MdAdd/>
            </CircleButton>
        </div>
    )
}

export default TodoCreate;