import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import styled from "styled-components";

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  & .checked {
    & .text {
      text-decoration: line-through;
      color: gray;
      font-size: 1.2em;
    }
  }
`;

const Text = styled.div`
  font-size: 1.2em;
  color: green;
`;

export const Todolistitem = ({ todoList, setTodolist, isChecked }) => {
  const { id, text, checked } = todoList;
  return (
    <div className="TodoItem">
      {/* 체크 여부에 따라 CSS 적용을 다르게 하기 위해 삼항연산자 사용 */}
      <Content className={`content ${checked ? "checked" : ""}`}>
        {checked ? (
          <MdCheckBox onClick={() => isChecked(id)} />
        ) : (
          <MdCheckBoxOutlineBlank onClick={() => isChecked(id)} />
        )}
        <div className="text">{text}</div>
      </Content>
    </div>
  );
};

export default Todolistitem;

/* TODO:
Todolistitem.js 구현 목표 체크리스트
1. 체크박스 아이콘 삽입 * (아이콘 종류 수정필요)
2. 수정 아이콘 삽입
3. 삭제 아이콘 삽입
4. 아이콘 클릭 시 수정 기능
5. 아이콘 클릭 시 삭제 기능
6. styled-components 적용
*/
