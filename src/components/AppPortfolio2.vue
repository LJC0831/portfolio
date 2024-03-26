<template>
    <div>
      <h2>매일매일 단어공부</h2>
      <h5>주소 : https://dailystudy.netlify.app</h5>
      <iframe :src="externalWebsiteUrl" width="100%" height="1000"></iframe>
    </div>
  </template>
    
  <script>
  export default {
    data() {
      return {
        externalWebsiteUrl: 'https://dailystudy.netlify.app/' 
      };
    }
  }
  </script>