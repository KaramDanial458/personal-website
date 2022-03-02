import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './UIComponents/Pages/Home';

function App() {
  return (
    <>
      <Router>
        <Home />
      </Router>
    </>
  );
}

export default App;