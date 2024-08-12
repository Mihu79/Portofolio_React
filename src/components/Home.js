import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [artworks, setArtworks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [clientLink, setClientLink] = useState('');
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchArtworks();
  }, []);

  const fetchArtworks = () => {
    axios.get('http://localhost:3001/artworks') // Actualizează URL-ul aici
      .then(response => {
        console.log(response.data); // Verifică ce date primești
        setArtworks(response.data);
      })
      .catch(error => console.error('Error fetching artworks:', error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArtwork = { title, description, imageUrl, clientLink, status: 'displayed' };

    if (editId) {
      // Update artwork
      axios.put(`http://localhost:3001/artworks/${editId}`, newArtwork)
        .then(() => {
          fetchArtworks();
          resetForm();
        })
        .catch(error => console.error('Error updating artwork:', error));
    } else {
      // Add new artwork
      axios.post('http://localhost:3001/artworks', newArtwork)
        .then(() => {
          fetchArtworks();
          resetForm();
        })
        .catch(error => console.error('Error adding artwork:', error));
    }
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/artworks/${id}`)
      .then(() => fetchArtworks())
      .catch(error => console.error('Error deleting artwork:', error));
  };

  const handleEdit = (artwork) => {
    setTitle(artwork.title);
    setDescription(artwork.description);
    setImageUrl(artwork.imageUrl);
    setClientLink(artwork.clientLink);
    setEditId(artwork.id);
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setImageUrl('');
    setClientLink('');
    setEditId(null);
  };

  return (
    <div className="container">
      <h1>Portofolio</h1>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></input>
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
        <input
          type="url"
          placeholder="Client Link"
          value={clientLink}
          onChange={(e) => setClientLink(e.target.value)}
          required
        />
        <button type="submit">{editId ? 'Update Artwork' : 'Add Artwork'}</button>
        {editId && <button onClick={resetForm}>Cancel Edit</button>}
      </form>

      <div className="artworks-grid">
        {artworks.map(artwork => (
          <div key={artwork.id} className="artwork-card">
            <img src={artwork.imageUrl} alt={artwork.title} />
            <h2>{artwork.title}</h2>
            <p>{artwork.description}</p>
            <a href={artwork.clientLink} target="_blank" rel="noopener noreferrer">Client Site</a>
            <button onClick={() => handleEdit(artwork)}>Edit</button>
            <button onClick={() => handleDelete(artwork.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
