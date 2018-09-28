<template>
  <section class="index">
    這是內容頁
  </section>
</template>

<script>
import axios from 'axios';

export default {
  mounted() {
    axios.get('/api/broadcast/1')
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
