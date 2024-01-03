const app = Vue.createApp({
    // *v-if false olduğunda doma hiç yazılmıyor iken v-show false olduğunda DOM a YZILIR ama gösterilmez. İkisi arasındaki fark budur.
    template:`
    <div v-if="showInfo"> Deneme Yazısı-1 </div>
    

    <div v-show="showInfo"> Deneme Yazısı Show </div>
    <button @click="toggle">
     <span v-if="!showInfo">Göster</span>
     <span v-else>Gizle</span>
    </button>
    

    `,
    data() {
        return {
           showInfo:true
        }
    },
    methods: {
       toggle(){
        this.showInfo=!this.showInfo;
       }
    },
})


app.mount("#app")