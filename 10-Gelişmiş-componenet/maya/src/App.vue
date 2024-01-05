<template>
<Header content="Bu bir props olarak gönderilen BAşlıktır.">
  <h2>Slot olarak gönderilen başlık</h2>
  <p> componenet içineyazılan ları ilgili yerde slot ile çekebiliriz</p>
</Header>

</template>

<script>
import Header from "./components/Header.vue"


export default {
  name: 'App',
  components:{
    Header
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
