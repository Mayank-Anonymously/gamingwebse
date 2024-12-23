<template>
  <nav class="top-nav d-flex align-items-center">
    <a href="#">Home</a>
    <a href="#">Lottery</a>
    <a href="#">Cricket</a>
    <a href="#">Tennis</a>
    <a href="#">Football</a>
    <a href="#">Table Tennis</a>
    <a href="#">Baccarat</a>
    <a href="#">32 Cards</a>
    <a href="#">Teenpatti</a>
    <a href="#">Poker</a>
    <a href="#">Lucky 7</a>
  </nav>
</template>

<script>
export default {
  name: "TopNav",
};
</script>

<style scoped>
.top-nav {
  background-color: #343a40;
  padding: 10px 20px;
}
.top-nav a {
  color: white;
  margin-right: 15px;
  text-decoration: none;
}
.top-nav a:hover {
  text-decoration: underline;
}
</style>
