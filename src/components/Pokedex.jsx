import { React, useState, useEffect } from "react";
import Pokemon from "./Pokemon";
import Search from "./Search";
import Random from "./Random";
// const axios = require("axios");

//let name = getRandomInt(1, 300);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Pokedex = () => {
  //const [currentPokemon, setPokemon] = useState({});

  const [pokemon, setPokemon] = useState({ name: "Slowpoke", id: 79 });

  useEffect(() => {
    setPokemon(getPokemon("slowpoke"));
  }, []);

  async function getPokemon(idOrName) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}`);
    const json = await res.json();

    const flavorTextRes = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${idOrName}`
    );
    const flavorTextResJson = await flavorTextRes.json();
    // console.log("json: ", json);
    //console.log("json: ", flavorTextResJson);
    // json.types[0].type.name
    let optionalType2 =
      json.types.length !== 1 ? json.types[1].type.name : null;
    setPokemon({
      name: json.name,
      id: json.id,
      type1: json.types[0].type.name,
      type2: optionalType2,
      sprite: json.sprites.front_default,
      description:
        flavorTextResJson.flavor_text_entries[
          findEnDescription(flavorTextResJson.flavor_text_entries)
        ].flavor_text,
    });
    console.log(
      "TEST",
      flavorTextResJson.flavor_text_entries[
        findEnDescription(flavorTextResJson.flavor_text_entries)
      ].flavor_text
    );
    //console.log(pokemon);
    //findEnDescription(flavorTextResJson.flavor_text_entries)
  }

  const findEnDescription = (flavor_text_entries) => {
    // flavor_text_entries.forEach((element, index) => {
    //   if (element.language.name === "en") {
    //     return index;
    //   }
    //   console.log(index);
    // });
    for (let i = 0; i < flavor_text_entries.length; i++) {
      if (flavor_text_entries[i].language.name === "en") {
        return i;
      }
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    getPokemon(e);
  };

  return (
    <main>
      <nav className="nav-bar">
        <Random getPokemon={getPokemon} getRandomInt={getRandomInt} />
        {/* <Search getPokemon={getPokemon} /> */}
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange}></input>
          <input type="submit"></input>
        </form>
      </nav>
      <div className="pokedex">
        <Pokemon pokemon={pokemon} />
      </div>
    </main>
  );
};

export default Pokedex;
