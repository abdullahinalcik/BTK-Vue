<template>
  <div class="home">
    <!-------- veux tan önce ----------->
    <!-- <List :todos="todos"/> -->
    <List />
    <AddTodo />
  </div>
</template>

<script>
import { ref,onUpdated } from 'vue';
import List from "../components/List.vue"
import AddTodo from "../components/AddTodo.vue"
import { useRoute } from 'vue-router';


export default {
  name: 'Home',
  components: { List,AddTodo
   
  },
  setup(){ 
    



  }
}
</script>
