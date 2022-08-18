<template>
  <nav>
    <router-link to="/memo-letter">Home</router-link> |
    <router-link to="/memo-letter/about">About</router-link> |
    <router-link to="/memo-letter/login">Login</router-link> |
    <router-link to="/memo-letter/message">Message</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
