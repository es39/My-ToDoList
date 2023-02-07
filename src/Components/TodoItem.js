import React from "react";
import styled from "styled-components";

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .checked {
    > .text {
      text-decoration: line-through;
      color: gray;
    }
  }
`;

const Text = styled.div`
  font-size: 1.2em;
  color: green;
`;

export const Todolistitem = ({ todoList, isChecked, onRemove }) => {
  const { id, text, checked } = todoList;

  return (
    <Content>
      {/* 체크 여부에 따라 CSS 적용을 다르게 하기 위해 삼항연산자 사용 */}
      <div className={`content ${checked ? "checked" : ""}`}>
        {checked ? (
          <i
            className="fa-solid fa-square-check"
            onClick={() => isChecked(id)}
          ></i>
        ) : (
          <i className="fa-regular fa-square" onClick={() => isChecked(id)}></i>
        )}
        <div className="text">{text}</div>
        <button onClick={() => onRemove(id)}>삭제</button>
      </div>
    </Content>
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
