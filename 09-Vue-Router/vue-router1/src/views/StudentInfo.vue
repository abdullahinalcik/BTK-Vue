<template>
    <h3>Öğrenci Bilgi Sayfası</h3>
    <p>öğreni ID: {{ studentID }}</p>

</template>
    
<script>

export default{
    data(){
return{
    studentID: this.$route.params.id
}
    },
 
}

</script>

<style>

</style>