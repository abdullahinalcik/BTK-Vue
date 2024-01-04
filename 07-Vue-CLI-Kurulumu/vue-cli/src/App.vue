<template>
  <h3>{{ title }}</h3>
  <!-- <div> sdfsdf</div> -->
  <input type="text" ref="name">
  <br><input type="text" ref="password">
  <br><button @click="login">Giriş</button>
  <br>
  <p v-if="isLogin">Giriş başarılı</p>
  <p v-else>Giriş başarısız</p>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
      title:"Login",
      name:"ali",
      password:"123",
      isLogin:false
    }
 
  },
  methods:{
    login(){
       this.$refs.name.value===this.name&& this.$refs.password.value===this.password ? this.isLogin=true: this.isLogin=false
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
