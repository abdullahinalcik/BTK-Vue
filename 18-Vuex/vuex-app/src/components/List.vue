<template>
    <!-- ------ veux tan önce ----------->
    <!-- <ul>
        <li v-for="todo in todos" :key="todo.id">
            {{ todo.todo }}
        </li>
    </ul> -->
    <ul>
        <li v-for="todo in todos" :key="todo.id">
            {{ todo.todo }}
        </li>
    </ul>
  
</template>

<script>

import { computed } from 'vue';
import { useStore } from 'vuex';


export default {
//*    <!-------- veux tan önce ----------->
    // props:["todos"]
    setup(){
        const store=useStore()
        const todos = computed(()=>{
            return store.state.todos
        })
        return {todos}
    }

}
</script>

<style>

</style>