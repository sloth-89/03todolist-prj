import React from "react";
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
    width: 512px;
    height: 768px;
    background: white;
    border-radius: 16px;
    position: relative;
    box-shadow: 0 0 8px 0 rgb(0,0,0, 0.04);

    margin: 0 auto;
    margin-top: 96px;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
`

function TodoTemplate({children}){ // 하위 컴포넌트를 받기 위한 파라미터 children
    return(
     <TodoTemplateBlock>{children}</TodoTemplateBlock>
    )
}

export default TodoTemplate;