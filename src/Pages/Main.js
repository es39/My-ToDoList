import '../App.css';
import React from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import GlobalStyle from '../GlobalStyle'

export default function Main() {
  return (
      <div className="Main">
        <GlobalStyle />
          <main>
            <Link to='/todolist'><img src="todolistlogo.png" alt="투두리스트 로고"/></Link>
          </main>
      </div>
  );
}