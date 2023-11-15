import { defineStore } from "pinia";
import { ref } from 'vue'

export const useClinicasStore = defineStore("clinicas",{
    state: () => ({
        clinicas: ref({})
    }),
    getters:{
    
    },
    actions:{
    
    }
})