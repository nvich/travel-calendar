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

<style lang="scss">
@import '../../node_modules/@descco/ui-core/lib/scss/style.scss';

.wrapper {
  padding: 10px;
}
</style>
