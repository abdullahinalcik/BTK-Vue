const app = Vue.createApp({
    template:`<h2> Bu ilk uygulamamız </h2>
    <h3> Bu ilk uygulamamız </h3>
    <p> Bu ilk uygulamamız </p>
    <h2> {{başlik}} </h2>
    <h3> {{içerik}} </h3>
    <p> {{yorumSayısı}} </p> 
    <button v-on:click="ekle()"> Ekle </button>
    <br> 
    <p>{{yazı}} </p>

    `,
    data() {
        return {
            başlik:"Vue Dersi",
            içerik:"Vue 3 konuları",
            yorumSayısı:7,
            yazı:"yorum eklemek için tıklayınız"
        }
    },
    methods: {
        ekle(){
            // alert("ekle metodu çağrıldı");
            this.yorumSayısı++
            this.yazı=`${this.yorumSayısı} tane yorum girildi`
        }
    },
})


app.mount("#app")