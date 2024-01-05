<template>
<div>
    <h1>Öğrenciler</h1>
    <div v-for="s in students" :key="s.id">
        <br>
        <!-- ! params kullanımı PATH İLE -->
        <router-link :to="{path:`/students/${s.id}`}">router-link path ile {{ s.name }}</router-link> 
        <br><br>
   <!-- ! params kullanımı NAME İLE -->
        <router-link :to="{name:'studentInfo',params:{id:s.id}}">router-link name ile {{ s.name }}</router-link>
    </div>
</div>
    
</template>

<script>
import StudentInfo from './StudentInfo.vue';


export default{
data(){
    return{
        students:[
            {id:1,name:"Ali", not:55},
            {id:2,name:"Veli", not:75},
            {id:3,name:"Ayşe", not:85}
        ]
    }
}

}

</script>

<style>

</style>