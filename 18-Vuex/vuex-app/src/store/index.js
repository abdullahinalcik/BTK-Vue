import { createStore } from 'vuex'

export default createStore({
  state: {
     todos:[
      { id: 1, todo: "ders çalış", done: false },
        { id: 2, todo: "film izle", done: true },
        { id: 3, todo: "dizi izle", done: false },
        { id: 4, todo: "koşu yap", done: true },
      ],
  },
  getters: {
  },
  //* bir state de veri güncellemesi yapılan yer
  mutations: {
    AddTodo(state, { newTodo, done }) {
      let todo = {
        id: Math.floor(Math.random() * 1000000),
        todo: newTodo,
        done: done,
      };
      state.todos.push(todo);
    },
  },
  actions: {
    
  },
  modules: {
  }
})
