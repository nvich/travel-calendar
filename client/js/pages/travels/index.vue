<script>
import axios from 'axios';

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
      axios.get('http://localhost:3000/admin/travels')
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
        {{ travel.title }}
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
