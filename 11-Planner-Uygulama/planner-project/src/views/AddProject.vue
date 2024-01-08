<template>
  <form @submit.prevent="handleSubmit">
    <label>Title:</label>
    <input type="text" v-model="title" required />
    <label>Details:</label>
    <textarea v-model="details" required></textarea>
    <button>Add Project</button>
  </form>
</template>
<script>

export default {
  data() {
    return {

      title: "",
      details: "",

    }
  },

  methods: {
    handleSubmit() {
      let project = {
        // id: new Date().getTime(),
        title: this.title,
        details: this.details,
        complete:false
      }
      fetch("http://localhost:3000/projects", {
                method: 'POST',
                headers: { 'Content-Type': "application/json" },
                body: JSON.stringify(project)
            }).then(()=>this.$router.push("/")).catch(err => console.log(err))
      this.title="",
      this.details=""
      
      
      // this.projects.push({ id: new Date().getTime(), title: this.title, details: this.details })

    }
  }

}
</script>

<style>
form {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  max-width: 30rem;
  margin: auto;
}

label {
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}

input {
  padding: 10px;
  border: 0;
  border-bottom: 2px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}

textarea {
  border: 2px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 150px;
}

form button {
  display: block;
  margin: 20px auto 0;
  background: #76dd78;
  color: #fff;
  padding: 10px;
  border: 0;
  border-radius: 7px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    scale: 1.1;
    transition: 0.5s;
  }
}</style>