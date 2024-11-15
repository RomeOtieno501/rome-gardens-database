import React from 'react';
import { Link } from 'react-router-dom';

function GuestList({ guests, onDelete }) {
  const handleDelete = (id) => {
    fetch(`https://json-server-template-ruhj.onrender.com/guests/${id}`, { method: 'DELETE' })
      .then(() => onDelete(id));
  };

  return (
    <div className="guest-list">
      <h2>Guest List</h2>
      <ul>
        {guests.map((guest) => (
          <li key={guest.id} className="guest-item">
            <Link to={`/guest/${guest.id}`} className="guest-link">{guest.name}</Link>
            <button onClick={() => handleDelete(guest.id)} className="delete-button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GuestList;
