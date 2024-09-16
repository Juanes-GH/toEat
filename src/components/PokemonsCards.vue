<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getPokemons } from '@/services/pokemonService'

interface Pokemon {
  name: string
  image: string
}

const pokemonsList = ref<Pokemon[]>([])
const offset = ref(0)
const limit = ref(20)

async function fetchPokemons() {
  try {
    const newPokemons = await getPokemons(offset.value, limit.value)
    pokemonsList.value = [...pokemonsList.value, ...newPokemons]
    offset.value += limit.value
  } catch (error) {
    console.error('Error al obtener los datos:', error)
  }
}
onMounted(() => {
  fetchPokemons()
})

function handleClick() {
  limit.value = 8
  fetchPokemons()
}
</script>

<template>
  <h1 class="tittle">Pokédex</h1>
  <main class="cards-container">
    <div class="pokemon-card" v-for="pokemon in pokemonsList" :key="pokemon.name">
      <h2 class="pokemon-name">{{ pokemon.name }}</h2>
      <img :src="pokemon.image" :alt="pokemon.name" class="pokemon-image" />
    </div>
  </main>
  <div class="btn-container">
    <button class="load-more-pokemons-btn" @click="handleClick">Load more Pokémons</button>
  </div>
</template>

<style>
div button {
  align-items: center;
}
.tittle {
  text-align: center;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  color: #fc4580;
}
.cards-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 20px;
}

.pokemon-card {
  border: 3px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  background-color: #fbfcef;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

.pokemon-card:hover {
  transform: scale(1.05);
  border-color: #fc4580;
}

.pokemon-image {
  width: 100%;
  height: auto;
}

.pokemon-name {
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
}
.load-more-pokemons-btn {
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  background-color: #fc4580;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
}
.btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.load-more-pokemons-btn:hover {
  background-color: #fc451b;
}

@media (max-width: 960px) {
  .cards-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .cards-container {
    grid-template-columns: 1fr;
  }
}
</style>
