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
        <legend>Dados</legend>
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
      <fieldset>
        <legend>Pessoas</legend>
        <p>
          <label>Adultos:</label>
          <input type="text" v-model="travel.users.adults">
        </p>
        <p>
          <h3>Crianças: {{ travel.users.children.length }}</h3>
          <ul>
            <li v-for="(children, index) in travel.users.children" :key="index">
              <label>Idade:</label>
              <input type="text" v-model="children.age">
            </li>
          </ul>
        </p>
      </fieldset>
      <fieldset>
        <legend>Orçamento</legend>
        <p>
          <h3>Companhias aéreas: {{ travel.budget.payload.planeTickets.length }}</h3>
          <ul>
            <li v-for="(planeTicket, index) in travel.budget.payload.planeTickets" :key="index">
              <label>Nome:</label>
              <input type="text" v-model="planeTicket.name">

              <label>URL:</label>
              <input type="text" v-model="planeTicket.url">

              <label>Valor:</label>
              <input type="text" v-model="planeTicket.value">
            </li>
          </ul>
        </p>
      </fieldset>
      <fieldset>
        <legend>Hospedagem</legend>
        <p>
          <h3>Hóteis: {{ travel.budget.payload.accommodations.length }}</h3>
          <ul>
            <li v-for="(accommodation, index) in travel.budget.payload.accommodations" :key="index">
              <label>Nome:</label>
              <input type="text" v-model="accommodation.name">

              <label>URL:</label>
              <input type="text" v-model="accommodation.url">

              <label>Valor:</label>
              <input type="text" v-model="accommodation.value">
            </li>
          </ul>
        </p>
      </fieldset>
      <fieldset>
        <legend>Extras</legend>
        <p>
          <h3>Items: {{ travel.budget.payload.extras.length }}</h3>
          <ul>
            <li v-for="(extra, index) in travel.budget.payload.extras" :key="index">
              <label>Nome:</label>
              <input type="text" v-model="extra.name">

              <label>Descrição:</label>
              <input type="text" v-model="extra.description">

              <label>Valor:</label>
              <input type="text" v-model="extra.value">
            </li>
          </ul>
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
