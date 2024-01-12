<template>
<div>
    <div v-for="content in contents" :key="content.id">
    {{content.title}}
</div>
<hr>
 <div>
    <div v-for="content in contents" :key="content.id">
      {{ content.title }}
    </div>
    <div v-if="err">
      {{ err }}
    </div>
  </div>
</div>
  
</template>

<script>
import getContentsFetch from "../composables/getContentsFetch"
export default {
props:["contents"],

setup() {
  const { contents, err, getContents }=getContentsFetch()
  getContents()
  return {cont4,getContents}
}

}
</script>

<style>

</style>