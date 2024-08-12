import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './Counter';
import RandomNumber from './RandomNumber';
import './styles.css'; // Import the global styles

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div className="container">
    <h1>WEEk -7 Task</h1>
    <RandomNumber />
    <Counter />
  </div>
);

