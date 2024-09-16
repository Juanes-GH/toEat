<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getPokemons } from '@/services/pokemonService'

interface Pokemon {
  name: string
  image: string
}

const pokemonsList = ref<Pokemon[]>([])

onMounted(async () => {
  try {
    pokemonsList.value = await getPokemons(20, 20)
  } catch (error) {
    console.error('Error al obtener los datos:', error)
  }
})
</script>

<template>
  <div>
    <h1>Componente de cards</h1>
    <main class="cards-container">
      <ul>
        <li v-for="pokemon in pokemonsList" :key="pokemon.name" class="pokemon-card">
          <h2 class="pokemon-name">{{ pokemon.name }}</h2>
          <img :src="pokemon.image" :alt="pokemon.name" class="pokemon-image" />
        </li>
      </ul>
    </main>
    <button class="load-more-pokemons-btn">Load more Pokémons</button>
  </div>
</template>

<style>
.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.pokemon-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  width: 200px;
  margin: 1rem;
  background-color: #c8f9f5;
  cursor: pointer;
}
.pokemon-card:hover {
  border: 5px solid #1f0a54;
}

.pokemon-image {
  width: 100%;
  height: auto;
}

.pokemon-name {
  font-size: 18px;
  font-weight: bold;
  margin: 1rem;
  font-family: 'Roboto', sans-serif;

  font-weight: 700;
  text-transform: uppercase;
}
@media (max-width: 600px) {
  .pokemon-card {
    width: 100%;
  }
}
</style>
