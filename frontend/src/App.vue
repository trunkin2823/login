<template>
  <div id="app">
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Footer
  }
};
</script>

<style>
#app {
  text-align: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.home-container {
  padding: 2rem;
  text-align: center;
}
</style>
