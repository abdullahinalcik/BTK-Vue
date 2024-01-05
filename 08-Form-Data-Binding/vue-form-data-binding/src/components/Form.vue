<template>
    <form @submit.prevent="sendData">
        <input type="text" v-model="text">
        <p>{{ text }}</p>
        <select v-model="seçilenFramework">
            <option value="1">Vue</option>
            <option>React</option>
            <option>Svelte</option>
        </select>
        <!-- !burada v-model varsa optionların value değerlerini alır. yokas içeriğini alır -->
        <p>{{ seçilenFramework }}</p>
        <hr>
        <input type="checkbox" id="checkbox1" v-model="checked">
        <label for="checkbox1">Onay</label>
        <p> Sonuç: {{ checked ? "Onaylıyorum": "onaylamıyorum" }}</p>
        <br>
        <div>
            <input type="checkbox" value="Vue" id="Vue" v-model="frameWorks">
            <label for="checkbox1">Vue</label>
            <br>
            <input type="checkbox" value="React" id="React" v-model="frameWorks">
            <label for="checkbox1">React</label>
            <br>
            <input type="checkbox" value="Svelte value" id="Svelte" v-model="frameWorks">
            <label for="checkbox1">Svelte</label>

        </div>
        <p>Seçilen Frame Workler: {{ frameWorks }}</p>
        <h3>Öğrenciler</h3>
        <input type="text" v-model="student" @keyup="addStudent">
        <div v-for="student in students" :key="student"> 
        
            <span @click="deleteStudent(student)">{{ student }} </span>

        </div>
        <br>
        <button >Gönder</button>

    </form>

</template>

<script>
export default{
    data(){
        return{
            text:"deneme",
            seçilenFramework:"Seçilen options",
            checked:false,
            frameWorks:[],
            student:"",
            students:[]
          
        }
    },
    methods:{
        addStudent(e){
            if(e.key=="Enter"&& this.student){
                if(!this.students.includes(this.student)){
                    this.students.push(this.student)
                }
                this.student=""
            }
        },
        deleteStudent(e){
            this.students=this.students.filter(i=>e!=i)
        },
        sendData(){
            console.log("Veriler gönderildi");
        }
    }

}

</script>

<style>

</style>