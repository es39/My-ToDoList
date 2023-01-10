import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import styled from "styled-components";

const HeaderStyle = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Header = () => {
    return (
      <HeaderStyle>
        This area is Header
      </HeaderStyle>
    );
  }
  
export default Header;