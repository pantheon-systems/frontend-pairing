/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";

import { centeredColumn } from "./styles/grid";

import Pokemon from "./Pokemon";

const PokemonSpawner = ({
  handlePokemonButtonClick,
  hasGithubUser,
  hasPokemon,
  pokemon
}) => (
  <React.Fragment>
    <Pokemon pokemon={pokemon} hasPokemon={hasPokemon} />
    {hasGithubUser && !hasPokemon && (
      <div css={centeredColumn}>
        <button type="button" onClick={handlePokemonButtonClick}>
          Spawn Challenger!
        </button>
      </div>
    )}
  </React.Fragment>
);

export default PokemonSpawner;
