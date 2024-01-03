const app = Vue.createApp({
   
    // template:`
    // <ul>
    //     <li v-for="gün in günler">{{gün}}</li>
    // </ul>
    // `,
    template:`
    <ul>
        <li v-for="per in persons"> Çalışan ismi:{{per.isim}} ve Maaşı: {{per.maaş}} ₺</li>
    </ul>
    `,
    data() {
        return {
            günler:["Pazatesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"],
            persons:[
                {isim:"Ali", maaş:150},
                {isim:"Veli", maaş:250},
                {isim:"Elif", maaş:350},
            ]
   
        }
    },
    methods: {
     
    },
})


app.mount("#app")