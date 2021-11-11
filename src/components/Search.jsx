import React from "react";
import { useState } from "react";

const Search = ({ getPokemon }) => {
  return (
    <form className="nav-child" onSubmit={getPokemon("squirtle")}>
      <input type="text"></input>
      <input type="submit"></input>
    </form>
  );
};

export default Search;
