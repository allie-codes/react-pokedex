import React from "react";
import PokemonInfo from "./PokemonInfo";

const Pokemon = ({ pokemon }) => {
  return (
    <section className="pokemon-container">
      <div className="pokemon-img">
        <img src={pokemon.sprite} alt="pokemon"></img>
      </div>
      <h2>
        <span>#{pokemon.id}:</span> <span>{pokemon.name}</span>
      </h2>

      <PokemonInfo header="Description" />

      <p>{pokemon.description}</p>
      <p>
        type: {pokemon.type1} {pokemon.type2}
      </p>
      {/* <PokemonInfo header="Abilities" />
      <PokemonInfo header="Moves" /> */}
    </section>
  );
};

export default Pokemon;
