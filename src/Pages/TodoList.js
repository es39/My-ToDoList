import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import styled from "styled-components";

import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Nav from './Nav'

export const TodoList = () => {
    return (
      <main>
        <Header />
        <Nav />
          <header>
            This area is Header
          </header>
        <Footer />
      </main>
    );
  }
  
export default TodoList;