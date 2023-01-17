import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Main from './Pages/Main'
import TodoList from './Pages/TodoList'
import Calendar from './Pages/Calendar'
import GlobalStyle from './GlobalStyle'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <GlobalStyle />
          <main>
            <section>
              <Routes>
                <Route exact path="/" element={<Main />}/>
                <Route path="/todolist" element={<TodoList />}/>
                <Route path="/calendar" element={<Calendar />}/>
              </Routes>
            </section>
          </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
