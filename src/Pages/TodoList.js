import React from "react";
import styled from "styled-components";

import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'

export const TodoList = () => {
    return (
      <main>
        <Header />
        <Nav />
          <header>
            This area is TodoList
          </header>
        <Footer />
      </main>
    );
  }
  
export default TodoList;