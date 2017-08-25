<script>
import { getId } from '../../services/travels';

export default {
  name: 'travel',
  data() {
    return {
      travel: {}
    };
  },
  mounted() {
    this.fetchTravel();
  },
  methods: {
    fetchTravel() {
      getId(this.$route.params.id)
        .then(response => {
          this.travel = response.data;
        });
    },
  }
};
</script>

<template>
  <div class="travel">
    <form action="">
      <fieldset>
        <legend></legend>
        <p>
          <label>Título:</label>
          <input type="text" v-model="travel.title">
        </p>
        <p>
          <label>Localização:</label>
          <input type="text" v-model="travel.local">
        </p>
        <p>
          <label>Data inicial:</label>
          <input type="text" v-model="travel.formattedStartDate">
        </p>
        <p>
          <label>Data final:</label>
          <input type="text" v-model="travel.formattedEndDate">
        </p>
      </fieldset>
    </form>
  </div>
</template>

<style>
.travel {
  font-family: Arial, sans-serif;
  text-align: left;
  color: #2c3e50;
  margin-top: 10px;
}

.travel input {
  width: 100%;
}
</style>
