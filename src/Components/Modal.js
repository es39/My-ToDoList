import React from "react";
import styled from "styled-components";
import { useState } from "react"
import Nav from './Nav'

const ModalStyle = styled.div `
    display: flex;
    justify-content: center;
    // align-items: center;
    height: 100%;
`
const ModalBtn = styled.button`
    border: none;
    background-color: transparent;
`
const ModalBack = styled.div`
    background: rgba(0, 0, 0, 0.5); 
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    // flex-direction: row-reverse;
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`
export const ModalView = styled.div.attrs((props) => ({
    role: 'dialog',
  }))`
    background-color: white;
    width: calc(100%/2);
    height: 100vh;
    color: black;
    border-radius: 15px;
    text-align: center;
    position: fixed;
    top: 0;
    right: 0;
    // bottom: 0;
    z-index: 999;
  `;

export const Modal = ({ modal, setModal }) => {
    const openModalHandler = () => {
        setModal(!modal)
    }

    return (
        <ModalStyle>
            <ModalBack onClick={openModalHandler}>
                <ModalView onClick={(event) => {event.stopPropagation()}}>
                    <ModalBtn onClick={openModalHandler}>x</ModalBtn>
                        <Nav />
                </ModalView>
            </ModalBack>
        </ModalStyle>
    )
}

export default Modal;