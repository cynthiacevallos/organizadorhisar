import { defineStore } from "pinia";
import { ref } from 'vue'

export const useClinicasStore = defineStore("clinicas",{
    state: () => ({
        arreglo: ref([])
    }),
    getters:{
        
    },
    actions:{
        addItem(){
            this.arreglo.values.push('')
        },
        getItems() {

        }
    }
})