import { defineStore } from "pinia";
//import { ref } from 'vue'

export const useClinicasStore = defineStore("clinicas",{
    //data reactive
    state: () => ({
        count: 0,
    }),
    // methods
    actions: {
        increment() {
            this.count++;
        },
    },
    // computed
    getters: {
        double: (state) => state.count * 2,
    },
    }
})