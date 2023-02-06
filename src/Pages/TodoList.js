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

const TodoMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .list {
    display: flex;
    flex-direction: column;
  }
`;

export const TodoList = () => {
  const [todoList, setTodolist] = useState([]);

  const addValue = (text) => {
    if (text === "") {
      return alert("입력은 필수다 구리!");
    } else {
      const todo = {
        id: todoList.length + 1,
        text,
        checked: false,
      };
      setTodolist([todo, ...todoList]);
    }
  };

  const isChecked = (id) => {
    setTodolist((todoList) =>
      todoList.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  return (
    <TodoMain>
      <Header />
      <TodoInsert addValue={addValue} />
      {todoList.map((todoList) => (
        <TodoItem key={todoList.id} todoList={todoList} isChecked={isChecked} />
      ))}
      {/* <AddBtn>+</AddBtn> */}
      <Footer />
    </TodoMain>
  );
};

export default TodoList;

/* 
  TodoList.js 구현 목표 체크리스트
  1. 헤더 컴포넌트 불러오기 * 
  2. 푸터 컴포넌트 불러오기 *
  3. create 기능 추가 * 
  3-1. 리스트 추가할 시 모달 or 입력창
  4. read 기능 추가 * 
  5. update 기능 추가
  6. delete 기능 추가 
  7. 체크박스 기능 추가
  7-1. 체크되었을 경우, 안되었을 경우 구분
  8. styled-components 적용 
*/
