import React from 'react';
import './App.css';
import { PomodoroPage } from './components/PomodoroPage';
import SchedulePage from './components/SchedulePage';
import TodoListPage from './components/TodoListPage';

function App() {
  return (
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
  );
}

export default App;
