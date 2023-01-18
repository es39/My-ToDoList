import React from "react";
import styled from "styled-components";
import { useState } from "react"

const ModalStyle = styled.div `
    background-color: yellow;
`

export const Modal = ( { modalOpen, setModalOpen } ) => {
    const openModal = () => {
        setModalOpen(!modalOpen)
    }

    return (
        <ModalStyle>
            hi! i'm modal!
        </ModalStyle>
    )
}

export default Modal;