<script setup lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import axios from 'axios'

interface Pokemon {
  name: String
  image: String
}

const pokemonsList = ref<Pokemon[]>([])

onMounted(async () => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=10&limit=10`)
    const pokemonData = response.data.results

    const pokemonDetailsPromises = pokemonData.map(async (pokemon) => {
      const pokemonDetailResponse = await axios.get(pokemon.url)
      return {
        name: pokemon.name,
        image: pokemonDetailResponse.data.sprites.front_default
      }
    })

    pokemonsList.value = await Promise.all(pokemonDetailsPromises)
  } catch (error) {
    console.error('Error al obtener los datos:', error)
  }
})
</script>

<template>
  <div>
    <h1>Componente de cards</h1>
    <main>
      <div v-for="pokemon in pokemonsList" :key="pokemon.name" class="pokemon-card">
        <h2>{{ pokemon.name }}</h2>
        <img :src="pokemon.image" :alt="pokemon.name" />
      </div>
    </main>

    <button class="load-more-pokemons-btn">Load more Pokémons</button>
  </div>
</template>

<style>
.pokemon-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  width: 150px;
  margin: 10px;
  background-color: #f8f8f8;
  cursor: pointer;
}
.pokemon-card:hover {
  border: 5px solid #1f0a54;
}

.pokemon-image {
  width: 100px;
  height: 100px;
}

.pokemon-name {
  font-size: 18px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;

  font-weight: 700;
  font-style: normal;
}
</style>
