import { defineStore } from "pinia";
import { computed, ref } from 'vue'

export const useClinicasStore = defineStore("clinicas",() =>{
    const clinicas = ref([])
    const getClinicas = computed(()=>clinicas.value)
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