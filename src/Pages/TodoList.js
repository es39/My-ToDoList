import React from "react";
import { useState } from 'react'
import styled from "styled-components";

import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'

export const TodoList = () => {
  const [modalOpen, setModalOpen] = useState(false)
    return (
      <main>
        <Header modalOpen={modalOpen} setModalOpen={setModalOpen}/>
          <main>
            This area is TodoList
          </main>
        <Footer />
      </main>
    );
  }
  
export default TodoList;