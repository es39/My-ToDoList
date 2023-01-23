import React from "react";
import { useState } from 'react'
import styled from "styled-components";

import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'

export const TodoList = () => {
  
    return (
      <main>
        <Header />
          <main>
            This area is TodoList
          </main>
          <Footer />
      </main>
    );
  }
  
export default TodoList;