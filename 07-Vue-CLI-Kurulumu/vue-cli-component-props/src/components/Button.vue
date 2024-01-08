<template>
    <div @click.="cleanCopmonentteki" @click.shift="cleanCopmonentShift">
        <h3>
            Aşağıdaki İnput u Temizle
        </h3>
    </div>
  
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        cleanCopmonentteki(){
            this.$emit("clean2")

        },
        cleanCopmonentShift(){
            this.$emit("clean")

        },
    },

}
</script>

<style scoped>
h3{
    cursor: pointer;
    color: black;
}

</style>