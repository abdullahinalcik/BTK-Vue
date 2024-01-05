<template>
  <nav>
    <!-- ! route'nin to ile kullanım -->
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>  -->
    <!-- ! route'un namesi ile kullanım burada TEK TIRNAK KULLANILACAK -->
    <router-link :to="{name:'home'}">Home</router-link> |
    <router-link :to="{name:'about'}">About</router-link>|
    <router-link :to="{name:'students'}">Students</router-link> 
    <!-- ! route'nin pathi ile kullanım -->
    <!-- <router-link :to="{path:'/'}">Home</router-link> |
    <router-link :to="{path:'/about'}">About</router-link>|
    <router-link :to="{path:'/students'}">Students</router-link> -->
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

/*? hangisi aktive ise onun rengini stillendiriyor */
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
