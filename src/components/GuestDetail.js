import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function GuestDetail() {
  const { id } = useParams();
  const [guest, setGuest] = useState(null);

  useEffect(() => {
    fetch(`/guests/${id}`)
      .then((res) => res.json())
      .then((data) => setGuest(data));
  }, [id]);

  return guest ? (
    <div>
      <h2>{guest.name}</h2>
      <p>Room: {guest.room}</p>
      <p>Status: {guest.status}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
}

export default GuestDetail;
