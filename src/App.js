// import logo from './logo.svg';
import './App.css';
import React from 'react';
import TodoList from './components/ToDoList';

function App(){
  return (
    <div style={{ margin: "2em"}}> {/* 2文字分のマージン */} 
      <TodoList />
    </div>
  );
}

export default App;