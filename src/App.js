import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import GuestList from './components/GuestList';
import GuestDetail from './components/GuestDetail';
import AddGuestForm from './components/AddGuestForm';

function App() {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    fetch('/guests')
      .then((res) => res.json())
      .then((data) => setGuests(data));
  }, []);

  const addGuest = (newGuest) => {
    setGuests([...guests, newGuest]);
  };

  const deleteGuest = (id) => {
    setGuests(guests.filter((guest) => guest.id !== id));
  };

  return (
    <Router>
       <h1>Rome Gardens</h1>
       <h2>The Million Dollar Experience</h2>
      <Header/>
      <Routes>
        <Route path="/" element={<GuestList guests={guests} onDelete={deleteGuest} />} />
        <Route path="/guest/:id" element={<GuestDetail />} />
        <Route path="/add" element={<AddGuestForm onAddGuest={addGuest} />} />
      </Routes>
    </Router>
  );
}

export default App;
