import { defineStore } from "pinia";
import { ref } from 'vue'

export const useClinicasStore = defineStore("clinicas",{
    //data reactive
    state: () => ({
        count: ref(5),
    }),
    // methods
    actions: {
        increment  () => {
            this.count.value++;
        },
    },
    // computed
    getters: {
        double: (state) => state.count * 2,
    },
    
})