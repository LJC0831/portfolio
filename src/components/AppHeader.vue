<template>
  <header>
    <div class="container">
      <nav>
        <router-link to="/AppPortfolio1">포트폴리오1</router-link>
        <router-link to="/AppPortfolio2">포트폴리오2</router-link>
        <router-link to="/AppPortfolio3">포트폴리오3</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  // 컴포넌트 내용
}
</script>

<style scoped>
header {
  background-color: #333;
  color: white;
  padding: 20px 0;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

h1 {
  margin: 0;
  font-size: 24px;
}

nav a {
  color: white;
  text-decoration: none;
  margin-left: 20px;
  font-size: 18px;
}

nav a:hover {
  text-decoration: underline;
}
</style>