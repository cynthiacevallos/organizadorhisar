import { defineStore } from "pinia";
import { computed, ref } from 'vue'

export const useClinicasStore = defineStore("clinicas",() =>{
    const counter = ref(0)
    const getCount = computed(()=>counter.value)
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