<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="background-color:">
    <div class="wrapper">
      <img alt="pokemonLogo" src="../public/Logo.jpg" class="logo" to="/" />

      <div class="search-bar">
        <input class="text-bar" type="text" />
        <button class="search-btn">Search</button>
      </div>

      <nav>
        <RouterLink class="home-link" to="/">Home</RouterLink>
        <RouterLink class="pokemon-list-link" to="/PokemonList">Pokédex</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  background-color: #fef8d6;
}
.wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
}
nav {
  display: block;
  margin: 2em;
}
.logo {
  height: 20ch;
  margin: 1rem;
}
.search-bar {
  display: flex;
  justify-content: center;
  align-items: center;
}
.search-btn .text-bar {
  padding: 1rem;
}
.home-link {
  padding: 1rem;
  text-decoration: none;
  color: #77c8e9;

  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-style: normal;
}
.home-link:hover {
  color: #b677e9;
}
.pokemon-list-link {
  padding: 1rem;
  text-decoration: none;
  color: #77c8e9;

  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-style: normal;
}
.pokemon-list-link:hover {
  color: #b677e9;
}
</style>
