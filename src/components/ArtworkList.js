import React, { useState } from 'react';
import axios from 'axios';

function AddArtwork() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [clientLink, setClientLink] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArtwork = { title, description, imageUrl, clientLink, status: 'displayed' };
    axios.post('http://localhost:3000/artworks', newArtwork)
      .then(response => console.log('Artwork added:', response))
      .catch(error => console.error('Error adding artwork:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
      <input type="text" placeholder="Image URL" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
      <input type="url" placeholder="Client Link" value={clientLink} onChange={(e) => setClientLink(e.target.value)} required />
      <button type="submit">Add Artwork</button>
    </form>
  );
}

export default AddArtwork;
