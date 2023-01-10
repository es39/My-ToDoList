import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components';

import Header from './Components/Header'
import Footer from './Components/Footer'
import Nav from './Pages/Nav'
import TodoList from './Pages/TodoList'
import Calendar from './Pages/Calendar'
import GlobalStyle from './GlobalStyle'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <GlobalStyle />
          <main>
            <div>
              <img src='todolistlogo.png' alt='투두의 숲'/>
            </div>
          </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
