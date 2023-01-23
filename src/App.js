import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './Pages/Main'
import TodoList from './Pages/TodoList'
import YesterdayList from './Pages/YesterdayList'
import Calendar from './Pages/Calendar'
import ACNH from './Pages/ACNH'
import Editor from './Pages/Editor'

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
                <Route path="/yesterdaylist" element={<YesterdayList />}/>
                <Route path="/calendar" element={<Calendar />}/>
                <Route path="/acnh" element={<ACNH />}/>
                <Route path="/editor" element={<Editor />} />
              </Routes>
            </section>
          </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
