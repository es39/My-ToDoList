import React from "react";
import { useState } from "react";
import styled from "styled-components";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import TodoItem from "../Components/TodoItem";
import TodoInsert from "../Components/TodoInsert";
import TodoInsertModal from "../Components/TodoInsertModal";

const AddBtn = styled.button`
  font-size: 2em;
  width: 80px;
  height: 80px;
  position: fixed;
  bottom: 50px;
  background-color: transparent;
  border: none;
  z-index: 100;
  color: #10ba00;
  right: -5px;
  cursor: pointer;
  > i {
    font-size: 1.4em;
  }
`;

const TodoMain = styled.main`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .list {
    display: flex;
    flex-direction: column;
    height: auto;
    position: fixed;
    top: 150px;
  }
  > .guri {
    position: absolute;
    top: 80px;
  }
`;

export const TodoList = () => {
  const [modal, setModal] = useState(false);
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
      setTodolist([...todoList, todo]);
    }
  };

  const isChecked = (id) => {
    setTodolist((todoList) =>
      todoList.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const isModal = () => {
    setModal(!modal);
  };

  return (
    <TodoMain>
      <Header />
      <div className="guri">할 일을 작성해줘 구리!</div>
      {modal ? <TodoInsertModal addValue={addValue} isModal={isModal} /> : null}
      <div className="list">
        {/* <ul> */}
        {todoList.map((todoList) => (
          // <li>
          <TodoItem
            key={todoList.id}
            todoList={todoList}
            setTodolist={setTodolist}
            isChecked={isChecked}
          />
          // </li>
        ))}
        {/* </ul> */}
      </div>
      <AddBtn onClick={isModal}>
        <i className="fa-solid fa-circle-plus"></i>
      </AddBtn>
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
  3-1. 리스트 추가할 시 모달 or 입력창 *
  4. read 기능 추가 * 
  5. update 기능 추가
  6. delete 기능 추가 *
  7. 체크박스 기능 추가 *
  7-1. 체크되었을 경우, 안되었을 경우 구분 *
  8. styled-components 적용 
*/
