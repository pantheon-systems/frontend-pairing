/** @jsxImportSource @emotion/react */
import { Fragment, useState } from "react";
import { css } from "@emotion/react";

import fetchGithubProfile from "./api/fetchGithubProfile";
import fetchPokemon from "./api/fetchPokemon";

import Arena from "./Arena";
import GithubSearch from "./GithubSearch";
import GlobalStyles from "./GlobalStyles";

const mainContainer = css`
  margin-left: auto;
  margin-right: auto;
  max-width: 42em;
`;

const App = () => {
  const [pokemon, updatePokemon] = useState({
    name: "",
  });
  const [githubUser, updateGithubUser] = useState({
    login: "",
  });
  const [formError, updateFormError] = useState();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await fetchGithubProfile(event.target.githubUser.value);
      updateGithubUser(result);
    } catch (err) {
      updateFormError("User not found.");
    }
  }

  const handlePokemonButtonClick = async () => {
    // TODO: fetch random pokemon
    const result = await fetchPokemon();
    updatePokemon(result);
  }

  return (
    <Fragment>
      <GlobalStyles />
      <div css={mainContainer}>
        <header>
          <h1>Github vs. Pokemon</h1>
        </header>
        <GithubSearch
          handleFormSubmit={handleFormSubmit}
          formError={formError}
        />
        <Arena
          githubUser={githubUser}
          pokemon={pokemon}
          handlePokemonButtonClick={handlePokemonButtonClick}
        />
      </div>
    </Fragment>
  );
}

export default App;
