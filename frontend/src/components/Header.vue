<template>
  <header class="header">
    <h1>Welcome to the Homepage</h1>
    <nav>
      <ul>
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li >
          <a href="#" @click.prevent="logout">Logout</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Header',
  computed: {
    ...mapGetters(['isAuthenticated', 'getUser']),
    user() {
      return this.getUser;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout'); // Gọi action logout trong store
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  background-color: #255cb3; /* Màu nền của header */
  color: white; /* Màu chữ của header */
  padding: 1em;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
}

nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
}

nav ul li {
  margin: 0 1em;
}

nav ul li a {
  color: white;
  text-decoration: none;
}

nav ul li a:hover {
  text-decoration: underline;
}
</style>
