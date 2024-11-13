import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './componenets/Header';

function App() {
  return (
    <Router>
       <h1>Rome Gardens</h1>
       <h2>The Million Dollar Experience</h2>
      <Header/>
    </Router>
  );
}

export default App;
