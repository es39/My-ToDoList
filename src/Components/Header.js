import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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
const IconWrapper = styled.div `
  width: 50px;
  height: 50px;
  display: flex;
  position: fixed;
  right: 0;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

`

export const Header = () => {
    return (
      <HeaderStyle>
        <ImgWrapper>
          <img src="logo2.png" alt="동물의 숲 나뭇잎 로고"/>
        </ImgWrapper>
        This area is Header 
        <IconWrapper>
          <i class="fa-solid fa-bars"></i>
        </IconWrapper>
      </HeaderStyle>
    );
  }
  
export default Header;