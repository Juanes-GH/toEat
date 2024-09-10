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
  <main>
    <pre>{{ newRestaurant }}</pre>
    <form @submit.prevent="addRestaurant">
      <div>
        <label for="restaurant-name">Restaurant Name</label>
        <input type="text" id="restaurant-name" v-model="newRestaurant.name" />
      </div>
      <div>
        <label for="restaurant-status">Restaurant Status</label>
        <select id="restaurant-Status" name="restaurant-Status" v-model="newRestaurant.status">
          <option v-for="status in statusList" :key="status" :value="status">{{ status }}</option>
        </select>
      </div>
      <button type="submit">Add Restaurant</button>
    </form>
    <ul>
      <li :key="restaurant" v-for="restaurant in restaurantList">
        {{ restaurant.name }} - {{ restaurant.status }}
      </li>
    </ul>
  </main>
</template>
