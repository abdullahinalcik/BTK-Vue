<template>
    <div>
        <h3>{{ title }}</h3>
        <h3>{{ propsManuel}}</h3>
        <h3>{{ propsState}}</h3>
    </div>

</template>

<script>

export default{
    props:["propsManuel","propsState"],
    data(){
        return {
         title:"Componentdeki state"
        }
    }
}

</script>
<!-- ! aşağıdaki scope ifadesi style ı sadece ilgili komponentte geçerli kılar -->
<style scoped>
h3{
    color: red;
    font-size: 2rem;
    font-weight: 700;
}

</style>
