import { defineStore } from "pinia";
import { ref } from 'vue'

export const useClinicasStore = defineStore("clinicas",{
    const count = ref(0)
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