import { defineStore } from "pinia";
import { computed, ref } from 'vue'

export const useClinicasStore = defineStore("clinicas",() =>{
    const counter = ref(0)
    const getCount = computed((state)=>counter.value)
    const incrementar = () =>{
        counter.value = counter.value+1
    }
    return{
        getCount, incrementar
    }
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