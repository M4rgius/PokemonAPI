import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm.toLowerCase());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Cerca Pokémon..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit">Cerca</button>
    </form>
  );
};

export default SearchBar;
