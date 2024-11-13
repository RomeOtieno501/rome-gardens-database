import React from 'react';
import { Link } from 'react-router-dom';

function GuestList({ guests }) {

  return (
    <div>
      <h2>Guest List</h2>
      <ul>
        {guests.map((guest) => (
          <li key={guest.id}>
            <Link to={`/guest/${guest.id}`}>{guest.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GuestList;
