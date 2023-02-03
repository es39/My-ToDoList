import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import styled from "styled-components";

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Text = styled.div`
  font-size: 1.2em;
  color: green;
`;

export const Todolistitem = ({ todoList, setTodolist }) => {
  const { id, text, checked } = todoList;
  return (
    <div className="TodoItem">
      {/* 체크 여부에 따라 CSS 적용을 다르게 하기 위해 삼항연산자 사용 */}
      <Content className={`content ${checked ? "checked" : ""}`}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <Text>{text}</Text>
      </Content>
    </div>
  );
};

export default Todolistitem;

/* 
Todolistitem.js 구현 목표 체크리스트
1. 아이콘 삽입 
2. 아이콘 클릭 시 수정 기능
3. 아이콘 클릭 시 삭제 기능
4. styled-components 적용
*/
