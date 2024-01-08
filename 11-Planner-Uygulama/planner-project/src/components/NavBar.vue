<template>
  <nav class="main-nav">
    <router-link :to="{ name: 'Home' }">Projects</router-link>
    <router-link :to="{ name: 'AddProject' }">Add New Projects</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
/* Burada router link oluşturulduğunda direk html de a  oluşturuluyor dolYISIYLA A İLE İLGİLİ ELEMANLARI YAKALAYA BİLİİRİM. */

nav a {
  text-decoration: none;
  margin-left: 1rem;
  padding: 4px;
  font-size: 1.5rem;
  
  &:hover {

  color: tomato;
  transition:  .5s;
}
}

</style>>

