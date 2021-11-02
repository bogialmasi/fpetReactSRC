import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { BlackAndWhite } from './BlackAndWhite';
import  {Game}  from './Game';

ReactDOM.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>,
  document.getElementById('root')
);

