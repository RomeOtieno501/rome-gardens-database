import React, { useState } from 'react';

function AddGuestForm({ onAddGuest }) {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGuest = { name, room, status };

    fetch('https://json-server-template-ruhj.onrender.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newGuest),
    })
      .then((res) => res.json())
      .then((data) => onAddGuest(data));
      
    setName('');
    setRoom('');
    setStatus('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Room" value={room} onChange={(e) => setRoom(e.target.value)} />
      <input type="text" placeholder="Status" value={status} onChange={(e) => setStatus(e.target.value)} />
      <button type="submit">Add Guest</button>
    </form>
  );
}

export default AddGuestForm;
