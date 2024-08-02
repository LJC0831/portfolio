<template>
  <div>
    <h2>분실/조회 찾기</h2>
    <h5>주소 : https://searchitem.vercel.app/</h5>
    <div v-if="loading" class="loading">로딩 중...</div>
    <iframe v-else :src="externalWebsiteUrl" width="100%" height="1000"></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true, 
      externalWebsiteUrl: 'https://searchitem.vercel.app' 
    };
  },
  mounted() {
    // 일정 시간이 지나면 로딩 상태를 해제
    setTimeout(() => {
      this.loading = false;
    }, 500); // 여기서는 5초(5000밀리초)로 설정했습니다. 실제 시간은 상황에 따라 조절 가능합니다.
  }
}
</script>

<style>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1000px; /* 로딩 중에도 iframe과 동일한 크기로 유지하기 위함 */
  font-size: 24px;
  color: #888;
}
</style>