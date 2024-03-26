<template>
  <div>
    <h2>매일매일 단어공부</h2>
    <h5>주소 : https://dailystudy.netlify.app</h5>
    <div v-if="loading" class="loading">로딩 중...</div>
    <iframe v-else :src="externalWebsiteUrl" width="100%" height="1000"></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true, 
      externalWebsiteUrl: 'https://dailystudy.netlify.app/' 
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 500); 
  }
}
</script>

<style>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1000px; 
  font-size: 24px;
  color: #888;
}
</style>