import React from 'react';
import './styles/App.css';
import { PomodoroPage } from './components/pomodoro/PomodoroPage';
import SchedulePage from './components/schedule/SchedulePage';
import TodoListPage from './components/todolist/TodoListPage';

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
