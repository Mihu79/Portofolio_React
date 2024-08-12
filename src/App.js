import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Import your components here
import Home from './components/Home';
import ArtworkList from './components/ArtworkList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<ArtworkList />} />
      </Routes>
    </Router>
  );
}

export default App;  // Ensure you have this export statement
