import React from "react";
import styled from "styled-components";
import { useState } from "react"

const ModalStyle = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`
const ModalBack = styled.div`
    background: rgba(0, 0, 0, 0.5); 
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
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
    // TODO : Modal창 CSS를 구현합니다.
    background-color: white;
    width: 300px;
    height: 100px;
    color: var(--coz-purple-600);
    border-radius: 15px;
    text-align: center;
  `;

export const Modal = () => {
    const [modal, setModalOpen] = useState(false)
    const openModalHandler = () => {
        setModalOpen(!modal)
    }

    return (
        <ModalStyle>
            <div className='open-modal-btn' onClick={openModalHandler}><i class="fa-solid fa-bars"></i></div>
            { modal === true ? 
                <ModalBack onClick={openModalHandler}>
                <ModalView onClick={(event) => {event.stopPropagation()}}>
                    <button className='exit-btn' onClick={openModalHandler}>x</button>
                    I'M MODAL
                </ModalView>
                </ModalBack>
            : null
            }
        </ModalStyle>
    )
}

export default Modal;