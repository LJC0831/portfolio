<template>
  <div>
    <h2>내 블로그</h2>
    <h5>주소 : https://www.develop-blog.shop</h5>
    <iframe :src="externalWebsiteUrl" width="100%" height="1000"></iframe>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      externalWebsiteUrl: 'https://www.develop-blog.shop/' 
    };
  }
}
</script>