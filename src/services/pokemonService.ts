import axios from 'axios'

interface Pokemon {
  name: string
  image: string
}

const API_URL = 'https://pokeapi.co/api/v2/pokemon'

export const getPokemons = async (offset: number, limit: number): Promise<Pokemon[]> => {
  const response = await axios.get(`${API_URL}?offset=${offset}&limit=${limit}`)
  const pokemonData = response.data.results

  const pokemonDetailsPromises = pokemonData.map(async (pokemon: { name: string; url: string }) => {
    const pokemonDetailResponse = await axios.get(pokemon.url)
    return {
      name: pokemon.name,
      image: pokemonDetailResponse.data.sprites.front_default
    }
  })

  return await Promise.all(pokemonDetailsPromises)
}
