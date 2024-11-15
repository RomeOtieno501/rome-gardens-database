import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import GuestList from './components/GuestList';
import GuestDetail from './components/GuestDetail';
import AddGuestForm from './components/AddGuestForm';
import EditGuestForm from './components/EditGuestForm';
import HotelDescription from './components/HotelDescription';

function App() {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    fetch('https://json-server-template-ruhj.onrender.com/guests')
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
      <div className="app">
        <header className="header">
          <h1>Rome Gardens</h1>
          <h2>The Million Dollar Experience</h2>
        </header>
        <Header />
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HotelDescription />
                  <GuestList guests={guests} onDelete={deleteGuest} />
                </>
              }
            />
            <Route path="/guest/:id" element={<GuestDetail />} />
            <Route path="/add" element={<AddGuestForm onAddGuest={addGuest} />} />
            <Route path="/edit/:id" element={<EditGuestForm guests={guests} onUpdateGuest={updateGuest} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
