<template>
    <div>
      <h2>채팅 어플리케이션</h2>
      <h5>주소 : https://friendtalk.shop</h5>
      <iframe :src="externalWebsiteUrl" width="100%" height="1000"></iframe>
    </div>
  </template>
    
  <script>
  export default {
    data() {
      return {
        externalWebsiteUrl: 'https://friendtalk.shop' 
      };
    }
  }
  </script>