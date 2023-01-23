import React from "react";
import { Link } from "react-router-dom"
import styled from "styled-components";
import Modal from './Modal'

const NavLink = styled.nav `
  // width: 50px;
  /* height: 50px; */
  /* position: fixed; */
  // right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @font-face {
    font-family: 'font';
    src: url('../Font/Asia신디나루M.ttf') format('truetype');
}
`

export const Nav = () => {
  return (
    <NavLink>
      <Link to='/todolist'>오늘의 할 일 </Link>
      <Link to='/yesterdaylist'>어제 했던 일 </Link>
      <Link to='/calendar'>달력 보기 </Link>
      <Link to='/acnh'>모동숲 </Link>
      <Link to='/editor'>만든 사람</Link>
    </NavLink>
  );
}

export default Nav;
  