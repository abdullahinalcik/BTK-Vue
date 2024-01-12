<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="todo" placeholder="Todo ekle" />
    <button>Ekle</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const todo = ref("");

    const handleSubmit = () => {
      const objectTodo = {
        newTodo: todo.value,
        done: true,
      };
      store.commit("AddTodo", objectTodo);
    };

    return { todo, handleSubmit };
  },
};
</script>

<style>
</style>