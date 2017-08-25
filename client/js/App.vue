<template>
  <div class="wrapper">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
        <router-link to="/travels">Viagens</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: 'Travel Calendar'
    };
  }
};
</script>

<style>
.wrapper {
  font-family: Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
