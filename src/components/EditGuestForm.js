import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditGuestForm({ guests, onUpdateGuest }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const guest = guests.find((g) => g.id === parseInt(id));

  const [name, setName] = useState(guest?.name || '');
  const [room, setRoom] = useState(guest?.room || '');
  const [status, setStatus] = useState(guest?.status || '');

  useEffect(() => {
    if (guest) {
      setName(guest.name);
      setRoom(guest.room);
      setStatus(guest.status);
    }
  }, [guest]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedGuest = { ...guest, name, room, status };

    fetch(`https://json-server-template-ruhj.onrender.com/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedGuest),
    })
      .then((res) => res.json())
      .then((data) => {
        onUpdateGuest(data);
        navigate('/');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} placeholder='Name' onChange={(e) => setName(e.target.value)} />
      <input type="text" value={room} placeholder='Room' onChange={(e) => setRoom(e.target.value)} />
      <input type="text" value={status} placeholder='Status' onChange={(e) => setStatus(e.target.value)} />
      <button type="submit">Update Guest</button>
    </form>
  );
}

export default EditGuestForm;
