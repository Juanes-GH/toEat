<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>ToEat</h1>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>{' '}
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
