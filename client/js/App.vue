<template>
  <div class="wrapper">
    <ul>
      <li>
        <router-link to="/foo">Go to Foo</router-link>
      </li>
      <li>
        <router-link to="/bar">Go to Bar</router-link>
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
