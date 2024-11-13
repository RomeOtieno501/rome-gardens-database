import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import GuestList from './components/GuestList';

function App() {
  const [guests, setGuests] = useState([
  { 
    "id": 1, 
    "name": "John Doe", 
    "room": 101, 
    "status": "Checked In" 
  },
    
  { 
    "id": 2, 
    "name": "Jane Smith", 
    "room": 102, 
    "status": "Checked Out" 
  },

  { 
    "id": 3, 
    "name": "Alice Johnson", 
    "room": 103, 
    "status": "Checked In" 
  },

  { 
    "id": 4, 
    "name": "Bob Brown", 
    "room": 104, 
    "status": "Checked Out" 
  },

  { 
    "id": 5, 
    "name": "Charlie Davis", 
    "room": 105, 
    "status": "Checked In" 
  },

  { 
    "id": 6, 
    "name": "Diana Evans", 
    "room": 106, 
    "status": "Checked Out" 
  },

  { 
    "id": 7, 
    "name": "Ethan Harris", 
    "room": 107, 
    "status": "Checked In" 
  },

  { 
    "id": 8, 
    "name": "Fiona Green", 
    "room": 108, 
    "status": "Checked Out" 
  },

  { 
    "id": 9, 
    "name": "George White", 
    "room": 109, 
    "status": "Checked In" 
  },

  { 
    "id": 10, 
    "name": "Hannah Black", 
    "room": 110, 
    "status": "Checked Out" 
  }
]);

  useEffect(() => {
    fetch('/guests')
      .then((res) => res.json())
      .then((data) => setGuests(data));
  }, []);

  return (
    <Router>
       <h1>Rome Gardens</h1>
       <h2>The Million Dollar Experience</h2>
      <Header/>
      <Routes>
        <Route path="/" element={<GuestList guests={guests} />} />
      </Routes>
    </Router>
  );
}

export default App;
