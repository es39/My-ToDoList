import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavLink = styled.nav`
  // width: 50px;
  /* height: 50px; */
  /* position: fixed; */
  // right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 50px;
  > * {
    text-decoration: none;
  }
  @font-face {
    font-family: "font";
    src: url("../Font/Asia신디나루M.ttf") format("truetype");
  }
`;

export const Nav = () => {
  return (
    <NavLink>
      <Link to="/todolist">오늘의 할 일 </Link>
      <Link to="/yesterdaylist">어제 했던 일 </Link>
      <Link to="/calendar">달력 보기 </Link>
      <Link to="/acnh">모동숲 </Link>
      <Link to="/editor">만든 사람</Link>
    </NavLink>
  );
};

export default Nav;

/*
  Nav.js 구현 목표 체크리스트
  1. Link to 로 연결 * 
  2. styled-components 적용 
*/
