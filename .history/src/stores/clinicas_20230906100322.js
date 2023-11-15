import { defineStore } from "pinia";
import { ref } from 'vue'

export const useClinicasStore = defineStore("clinicas",{
    state: () => ({
        items: ref([])
    }),
    getters:{
        
    },
    actions:{
        addCLinicas()
        getClinicas() {

        }
    }
})