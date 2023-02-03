import React from "react";
import { useState } from "react";
import styled from "styled-components";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import TodoItem from "../Components/TodoItem";
import TodoInsert from "../Components/TodoInsert";

const AddBtn = styled.button`
  font-size: 2em;
  width: 50px;
  height: 50px;
  position: fixed;
  z-index: 100;
  /* bottom: 0; */
`;

export const TodoList = () => {
  const [todoList, setTodolist] = useState([
    {
      id: 1,
      text: "할 일1",
      checked: true,
    },
    {
      id: 2,
      text: "할 일2",
      checked: true,
    },
    {
      id: 3,
      text: "할 일3",
      checked: false,
    },
    {
      id: 4,
      text: "할 일4",
      checked: true,
    },
  ]);

  return (
    <main>
      <Header />
      <TodoInsert />
      {todoList.map((todoList) => (
        <TodoItem key={todoList.id} todoList={todoList} />
      ))}
      {/* <AddBtn>+</AddBtn> */}
      <Footer />
    </main>
  );
};

export default TodoList;

/* 
  TodoList.js 구현 목표 체크리스트
  1. 헤더 컴포넌트 불러오기 * 
  2. 푸터 컴포넌트 불러오기 *
  3. create 기능 추가
  3-1. 리스트 추가할 시 모달 or 입력창
  4. read 기능 추가 * 
  5. update 기능 추가
  6. delete 기능 추가 
  7. 체크박스 기능 추가
  7-1. 체크되었을 경우, 안되었을 경우 구분
  8. styled-components 적용 
*/
