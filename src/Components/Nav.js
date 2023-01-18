import React from "react";
import styled from "styled-components";

const IconWrapper = styled.div `
  width: 50px;
  /* height: 50px; */
  display: flex;
  /* position: fixed; */
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  > i {
    font-size: 2rem;
  }

`

export const Nav = () => {
  return (
    <nav>
      <IconWrapper>
        <i class="fa-solid fa-bars"></i>
      </IconWrapper>
      {/* <Link to='/todolist'>오늘의 할 일 </Link>
      <Link to='/yesterdaylist'>어제 했던 일 </Link>
      <Link to='/calendar'>달력 보기 </Link>
      <Link to='/acnh'>모동숲 </Link>
      <Link to='/editor'>만든 사람</Link> */}
    </nav>
  );
}

export default Nav;
  