import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Hello = (props) => {
  return (
    <div>こんにちは、{props.children}さん</div>
  );
};

const Greeting = (props) => {
  return (
    <div>
      <div>ご挨拶</div>
      {props.children}
    </div>
  );
};

root.render(
  <div>
    <Greeting>
      <Hello>西郷隆盛</Hello>
      <Hello>坂本龍馬</Hello>
    </Greeting>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
