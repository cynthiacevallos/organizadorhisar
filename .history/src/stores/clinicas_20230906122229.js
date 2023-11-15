import { defineStore } from "pinia";
import { computed, ref } from 'vue'
import axios from 'axios';

export const useClinicasStore = defineStore("clinicas",() =>{
    const clinicas = ref([])
    const getClinicas = computed(()=> clinicas.value)
    const clin = () => {
        axios.post("http://10.0.54.105:5173/"+"api/api/token/",{
            username: "cnsr",
            password: "123456",
        }).then((response)=>{
            let result = response.data.access
            axios.get("http://10.0.54.105:5173/"+"api/cas/",{
                headers:{ Authorization: "Bearer " + result },
            }).then((res)=>{
                for(let i = 0; i<res.data[0]){
                    clinicas.value.push(i)
                }
                //clinicas.value.push(res.data[i].descripCas)
                //clinicas.value = res.data
            })
        })
    }
    return {
        getClinicas,
        clin
    }

    /*const counter = ref(0)
    const getCount = computed(()=>counter.value)
    const incrementar = () =>{
        counter.value ++
    }*/
    /*return{
        getCount, incrementar
    }*/
    //data reactive
    /*state: () => ({
        count: ref(5),
    }),
    // methods
    actions: {
        increment  ()  {
            this.count.value++;
        },
    },
    // computed
    getters: {
        double: (state) => state.count * 2,
    },*/
    
})