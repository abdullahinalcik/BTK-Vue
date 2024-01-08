<template>
  <div class="home">
    <FilterNav @filterChan></FilterNav>
    <div v-if="projects.length">
      <div v-for="project in projects" :key="project.id">
        <SingleProject
          :project="project"
          :projects="projects"
          @delete="handleDelete"
          @complete="handleComplete"
        ></SingleProject>
      </div>
    </div>
  </div>
</template>

<script>
import SingleProject from "../components/SingleProject.vue";
import NavBar from "../components/NavBar.vue";
import FilterNav from '../components/FilterNav.vue';

export default {
  name: "HomeView",
  components: {
    SingleProject,FilterNav
  },
  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/projects")
      .then((res) => res.json())
      .then((data) => (this.projects = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    handleDelete(id) {
      this.projects = this.projects.filter((project) => project.id != id);
    },
    handleComplete(id) {
      let p = this.projects.find((project) => project.id === id);
      p.complete = !p.complete;
    },
  },
};
</script>
