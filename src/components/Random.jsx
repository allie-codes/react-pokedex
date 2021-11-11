import React from "react";

const Random = ({ getPokemon, getRandomInt }) => {
  return (
    <button
      className="nav-child"
      onClick={() => {
        getPokemon(getRandomInt(1, 898));
      }}
    >
      Random Pokemon
    </button>
  );
};

export default Random;
