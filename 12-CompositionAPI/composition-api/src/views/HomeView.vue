<template>
  <div class="home">
    Home
    <p>{{ name }} - {{ jop.name }}</p>
    <p ref="info">Deneme</p>
    <button @click="clicked">Tıkla</button>
    <input type="text" v-model="name" />
    <hr />
    <div v-for="day in days" key="day">
      {{ day }}
    </div>
    <hr />
    <p>filtere</p>
    <input type="text" v-model="search" />
    <div v-for="day in finded" key="day">
      {{ day }}
    </div>
    <button @click="stop">stop</button>
    <hr />
    <div>
      <Contents :contents="contents"></Contents>
    </div>
    <hr />
    <div>
      <div v-if="err">
        {{ err }}
      </div>
      <div v-for="content in contents2" v-key="content.id">
        {{content.title}}
      </div>
    </div>
  </div>
</template>

<script>
import {
  onMounted,
  ref,
  reactive,
  computed,
  watch,
  watchEffect,
  stop,
} from "vue";
import Contents from "../components/Contents.vue";

export default {
  name: "HomeView",
  components: { Contents },
  // * 1 setup 2 created 3 mounted
  setup() {
    // console.log("setup yüklendi");
    // onMounted(() => {
    //   console.log("mounted yüklendi")
    // })
    // let name = "ali";
    let name = ref("Ali");
    // let jop = "developer";
    //*reactive objeler için string içinde kullanılabilir
    let jop = reactive({ name: "developer reactive" });

    const info = ref(null);

    const clicked = () => {
      console.log("Tıklandı");
      console.log(info, info.value);
      name.value = "Deneme click";
      // jop.value="Deneme click"
      console.log(name);
    };
    const days = ref(["pazartesi", "salı", "çarşamba", "perşembe", "cuma"]);
    const search = ref("");
    const finded = computed(() => {
      return days.value.filter((day) => day.includes(search.value));
    });

    //?React daki didmount willmount deadmount lara benziyor
    // *search değişkenin iziliyor her değişiklikte çalışıyor
    const watchS = watch(search, () => {
      console.log("watch çalıştı");
      console.log(search.value);
    });
    // *İçine değişken yazılmazsa render edildiğinde bir defa çalışır. Eğer içine değişken atandığında değişken her değiştiğinde çalışacaktır. Burada search değişken olduğundan her değişikliğinde çalışacak.

    const watchEffectS = watchEffect(() => {
      console.log("watchEffect çalıştı");
      console.log(search.value);
    });
    //? watch ları dırdurmak için stop kullaınılır
    const stop = () => {
      watchS(), watchEffectS();
    };

    const contents = ref([
      { id: 1, title: "Deneme 1", details: "Detail 1" },
      { id: 2, title: "Deneme 2", details: "Detail 2" },
      { id: 3, title: "Deneme 3", details: "Detail 3" },
      { id: 4, title: "Deneme 4", details: "Detail 4" },
    ]);

    const contents2 = ref([]);
    const err = ref(null);
    const getContents = async () => {
      try {
        let data = await fetch("https://jsonplaceholder.typicode.com/posts");
        contents2.value = await data.json();
        if (!data.ok) {
          throw new Error("verilere erişilemedi ");
        }
      } catch (error) {
        err.value = error.message;
      }
    };
    getContents();

    return {
      name,
      jop,
      clicked,
      info,
      days,
      search,
      finded,
      stop,
      contents,
      contents2,
      err,
    };
  },
  // mounted() {
  //   console.log("mounted yüklendi")
  // },
  // created() {
  //   console.log("created yüklendi")
  // },
};
</script>
