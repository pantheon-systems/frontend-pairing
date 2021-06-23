/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

const alignRight = css`
  text-align: right;
`;

const avatar = css`
  min-width: 10rem;
`;

const Pokemon = ({ pokemon, hasPokemon }) => {
  if (!hasPokemon) return null;
  return (
    <div css={alignRight}>
      <img
        alt={`${pokemon.name}'s avatar`}
        css={avatar}
        src={pokemon.sprites.front_default}
      />
      <p>Name: {pokemon.name}</p>
      <p>Attack: {pokemon.stats.attack.base_stat}</p>
      <p>Speed: {pokemon.stats.speed.base_stat}</p>
      <p>HP: {pokemon.stats.hp.base_stat}</p>
      <p>Defense: {pokemon.stats.defense.base_stat}</p>
    </div>
  );
};

export default Pokemon;
