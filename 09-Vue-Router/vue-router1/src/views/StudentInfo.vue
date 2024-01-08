<template>
    <h3>Öğrenci Bilgi Sayfası</h3>
    <p>öğreni ID: {{ studentID }}</p>
    <p>öğreni ID PROPS İLE: {{ id }}</p>

</template>
    
<script>

export default{
    props:["id"],
    data(){
return{
    studentID: this.$route.params.id
}
    },
 
}

</script>

<style>

</style>