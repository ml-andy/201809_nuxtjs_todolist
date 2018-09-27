<template>
  <section class="index">
    這是首頁
  </section>
</template>

<script>
import axios from 'axios';

export default {
  mounted() {
    axios.get('/api/broadcast/')
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  },
}
</script>

<style></style>
