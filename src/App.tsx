import React from 'react';
import './styles/App.css';
import { PomodoroPage } from './components/pomodoro/PomodoroPage';
import SchedulePage from './components/schedule/SchedulePage';
import TodoListPage from './components/todolist/TodoListPage';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
      <div className='page'>
        <div className='nav-bar'>
            <Navbar/>
        </div>

        <div className="App">
          <div className='schedule-page'>
            <SchedulePage/>
          </div>

          <div className='pomodoro-page'>
            <PomodoroPage/>
          </div>

          <div className='todolist-page'>
            <TodoListPage/>
          </div>
        </div>
      </div>
  );
}

export default App;
