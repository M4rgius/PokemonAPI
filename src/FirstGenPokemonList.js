import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

const FirstGenPokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState([]);

  useEffect(() => {
    const fetchFirstGenPokemon = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
        setPokemonList(response.data.results);
        setFilteredPokemonList(response.data.results);
      } catch (error) {
        console.error('Errore durante il recupero dei Pokémon:', error);
      }
    };

    fetchFirstGenPokemon();
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = pokemonList.filter((pokemon) =>
      pokemon.name.includes(searchTerm.toLowerCase())
    );
    setFilteredPokemonList(filtered);
  };

  return (
    <div>
      <h1>Prima Generazione Pokémon</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="pokemon-list">
        {filteredPokemonList.map((pokemon) => (
          <div key={pokemon.name} className="pokemon-card">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`} alt={pokemon.name} />
            <h3>{pokemon.name}</h3>
            
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirstGenPokemonList;
