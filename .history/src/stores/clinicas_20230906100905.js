import { defineStore } from "pinia";
import { ref } from 'vue'

export const useClinicasStore = defineStore("clinicas",{
    state: () => ({
        arreglo: ref([])
    }),
    //
    getters:{
        
    },
    //methods
    actions:{
        addItem(item){
            this.arreglo.values.push(item)
        },
        getItems() {

        }
    }
})