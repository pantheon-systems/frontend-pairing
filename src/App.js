/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";

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

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formError: null,
      githubUser: {
        login: ""
      },
      pokemon: {
        name: ""
      }
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handlePokemonButtonClick = this.handlePokemonButtonClick.bind(this);
    this.updateGithubUser = this.updateGithubUser.bind(this);
  }

  async handleFormSubmit(event) {
    event.preventDefault();

    try {
      const result = await fetchGithubProfile(event.target.githubUser.value);
      this.updateGithubUser(result);
    } catch (err) {
      this.updateFormError(err.message);
    }
  }

  async handlePokemonButtonClick() {
    // TODO: fetch random pokemon
    const result = await fetchPokemon();
    this.updatePokemon(result);
  }

  updateFormError(formError) {
    this.setState(() => ({ formError }));
  }

  updateGithubUser(githubUser) {
    this.setState(() => ({ githubUser }));
  }

  updatePokemon(pokemon) {
    this.setState(() => ({ pokemon }));
  }

  render() {
    const { formError, githubUser, pokemon } = this.state;
    return (
      <React.Fragment>
        <GlobalStyles />
        <div css={mainContainer}>
          <header>
            <h1>Github vs. Pokemon</h1>
          </header>
          <GithubSearch
            handleFormSubmit={this.handleFormSubmit}
            formError={formError}
          />
          <Arena
            githubUser={githubUser}
            pokemon={pokemon}
            handlePokemonButtonClick={this.handlePokemonButtonClick}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
