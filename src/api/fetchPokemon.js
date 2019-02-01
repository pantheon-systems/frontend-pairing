import keyBy from "lodash/keyBy";

// TODO: implement API fetch
// truncated example fixture from: https://pokeapi.co/api/v2/pokemon/1/
const pokemonFixture = {
  name: "bulbasaur",
  sprites: {
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  },
  stats: [
    {
      base_stat: 45,
      stat: {
        name: "speed"
      }
    },
    {
      base_stat: 49,
      stat: {
        name: "defense"
      }
    },
    {
      base_stat: 49,
      stat: {
        name: "attack"
      }
    },
    {
      base_stat: 45,
      stat: {
        name: "hp"
      }
    }
  ]
};

const keyStats = pokemon => {
  const stats = pokemon.stats;
  const keyedStats = keyBy(stats, ({ stat }) => {
    return stat.name;
  });
  return {
    ...pokemon,
    stats: keyedStats
  };
};

// TODO: fetch pokemon
// https://pokeapi.co/api/v2/pokemon/
const fetchPokemon = () => {
  const normalizedResponse = keyStats(pokemonFixture);
  return normalizedResponse;
};

export default fetchPokemon;
