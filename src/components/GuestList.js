import React from 'react';
import { Link } from 'react-router-dom';

function GuestList({ guests, onDelete }) {
  const handleDelete = (id) => {
    fetch(`/guests/${id}`, { method: 'DELETE' })
      .then(() => onDelete(id));
  };

  return (
    <div>
      <h2>Guest List</h2>
      <ul>
        {guests.map((guest) => (
          <li key={guest.id}>
            <Link to={`/guest/${guest.id}`}>{guest.name}</Link>
            <button onClick={() => handleDelete(guest.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GuestList;
