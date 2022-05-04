import React from 'react';
import Box from '@mui/material/Box'

import { AppBar } from './components/index';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar logo="images/eevee.png" />

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </Box>
    </div>
  );
};

export default App;
