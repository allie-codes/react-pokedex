import React from 'react';

const PokemonInfo = (props) => {
    return (
        <section className="pokemon-info">
            <h3>{props.header}</h3>
        </section>
    );
}

export default PokemonInfo;