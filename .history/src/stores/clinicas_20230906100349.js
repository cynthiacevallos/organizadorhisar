import { defineStore } from "pinia";
import { ref } from 'vue'

export const useClinicasStore = defineStore("clinicas",{
    state: () => ({
        arreglo: ref([])
    }),
    getters:{
        
    },
    actions:{
        addItem(item){
            this.arreglo.values.push(item)
        },
        getItems() {

        }
    }
})