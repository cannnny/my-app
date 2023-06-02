// import logo from './logo.svg';
import './reset.css';
import './App.scss';
// import React from 'react';
import ToDo from './components/ToDo';

function App(){
  return (
    <div style={{margin: "2em"}}> {/* 2文字分のマージン */} 
      <ToDo />
    </div>
  );
}

export default App;