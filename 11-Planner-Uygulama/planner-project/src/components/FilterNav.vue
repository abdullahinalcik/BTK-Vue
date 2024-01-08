<template>
  <nav class="filter-nav">
    <button
    @click="updateFilter('all')" 
   
    >
      All
    </button>
    <button
      @click="updateFilter('completed')">
      
      Complated
    </button>
    <button
      @click="updateFilter('ongoing')"
      
    >
      Ongoing
    </button>
  </nav>
</template>

<script>
export default {
    methods: {
        updateFilter(string){
            this.$emit('filterChange',string)
        }
    },
};
</script> 

<style>
</style>