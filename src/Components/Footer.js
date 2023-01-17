import React from "react";
import styled from "styled-components";

const FooterStyle= styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 30px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Footer = () => {
    return (
      <FooterStyle>
        @ 2023 Sunny Day
      </FooterStyle>
    );
  }
  
export default Footer;
  