import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import GuestList from './components/GuestList';
import GuestDetail from './components/GuestDetail';
import AddGuestForm from './components/AddGuestForm';
import EditGuestForm from './components/EditGuestForm';

function App() {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/guests')
      .then((res) => res.json())
      .then((data) => setGuests(data));
  }, []);

  const addGuest = (newGuest) => {
    setGuests([...guests, newGuest]);
  };

  const deleteGuest = (id) => {
    setGuests(guests.filter((guest) => guest.id !== id));
  };

  const updateGuest = (updatedGuest) => {
    setGuests(guests.map((guest) => (guest.id === updatedGuest.id ? updatedGuest : guest)));
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
       <Route path="/edit/:id" element={<EditGuestForm guests={guests} onUpdateGuest={updateGuest} />} />
      </Routes>
    </Router>
  );
}

export default App;
