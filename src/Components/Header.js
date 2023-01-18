import React from "react";
import styled from "styled-components";
import { useState } from "react"

import Nav from './Nav'

const HeaderStyle = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.4);
    width: 100%;
`
const ImgWrapper = styled.div`
  width: 30px;
  height: 40px;
  display: flex;
  position: fixed;
  left: 0;
  margin-left: 20px;
`

export const Header = ({ modalOpen, setModalOpen }) => {
    return (
      <HeaderStyle>
        <ImgWrapper>
          <img src="logo2.png" alt="동물의 숲 나뭇잎 로고"/>
        </ImgWrapper>
        <Nav />
      </HeaderStyle>
    );
}
  
export default Header;