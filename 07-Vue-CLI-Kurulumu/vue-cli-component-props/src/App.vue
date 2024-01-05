<template>
  <başlık propsManuel="Props Manuel olarak gönderilen başlık" :propsState="localState"/>
  <h3> App.vue deki Başlık</h3>
  <Button @clean="cleanInput" @clean2="cleanInput2"/>
  <input type="text" ref="inputText">
 
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
  },
  methods:{
    cleanInput(){
      this.$refs.inputText.value=""
    },
    cleanInput2(){
      this.$refs.inputText.value="cleanInput2 tetiklendi"
    },
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
