<template>
  <div>
    <h1>{{ content }}</h1>
    <slot></slot>
    <hr>
    <input type="text" v-model="name"> 

    <input type="text" v-model="surname">

    <p>{{ nameSurname }}</p>
    <hr>
    <input type="number" v-model="number1"><br>
    <input type="number" v-model="number2"><br>
    <input type="number" v-model="total">

    
  </div>
</template>

<script>
export default {
    props:['content'],
  data(){
    return{
      name:"",
      surname:"",
      number1:0,
      number2:0,
      total:0

    }
  },
  watch:{
        number1(newValue,oldValue){
          console.log("Sayılar", oldValue,newValue);
          this.total=parseInt(this.number1)+parseInt(this.number2)
        },
        number2(newValue,oldValue){
          console.log("Sayılar", oldValue,newValue);
          this.total=parseInt(this.number1)+parseInt(this.number2)
        }
  },
  computed:{
    nameSurname(){
      return this.name + " "+ this.surname
    }
  }
}
</script>

<style scoped>
input {
  margin: 1rem;
}
</style>