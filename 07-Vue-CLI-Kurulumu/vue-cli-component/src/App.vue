<template>
  <başlık propsManuel="Props Manuel olarak gönderilen başlık" :propsState="localState"/>
  <h3> App.vue deki Başlık</h3>
 
</template>

<script>
import farketmez from "./components/Title.vue"
import Button from "./components/Button.vue"

export default {
  name: 'App',
  components:{
    başlık:farketmez,
    Button

  },
  data(){
    return{
      localState:"Props u state olarak gönderimi"
    }
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
