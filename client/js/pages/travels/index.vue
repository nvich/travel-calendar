<script>
import { getAll } from '../../services/travels';

export default {
  name: 'travels',
  data() {
    return {
      travels: []
    };
  },
  mounted() {
    this.fetchTravels();
  },
  methods: {
    fetchTravels() {
      getAll()
        .then(response => {
          this.travels = response.data;
        });
    },
  }
};
</script>

<template>
  <div class="travels">
    <ul>
      <li v-for="travel in travels" :key="travel._id">
        <h2><router-link :to="{path: '/travels/'+travel._id}">{{ travel.title }}</router-link></h2>
      </li>
    </ul>
  </div>
</template>

<style>
.travels {
  font-family: Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
