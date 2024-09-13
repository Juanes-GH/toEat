<script setup lang="ts">
import { ref } from 'vue'

interface Restaurant {
  name?: string
  status?: RestaurantStatus
  dishes?: Dish[]
}

type RestaurantStatus = 'Want to Try' | 'Recommented' | 'Do not Recommend' | 'Must Try'

const statusList = ['Want to Try', 'Recommented', 'Do not Recommend', 'Must Try']

const restaurantList = ref<Restaurant[]>([])
const newRestaurant = ref<Restaurant>({})

function addRestaurant() {
  restaurantList.value.push({
    name: newRestaurant.value.name,
    dishes: [],
    status: newRestaurant.value.status
  })
}
</script>

<template>
  <main>Esta pagina esta hecha solamente para el aprendizaje de Vue.js, Tyscript and electron</main>
</template>
