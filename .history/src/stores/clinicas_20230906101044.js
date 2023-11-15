import { defineStore } from "pinia";
import { ref } from 'vue'

export const useClinicasStore = defineStore("clinicas",{
    //data reactive
    state: () => ({
        arreglo: ref([])
    }),
    //computed
    getters:{
        
    },
    //methods
    actions:{
        addItem(item){
            this.arreglo.values.push(item)
        },
        getItems() {
            console.log()
        }
    }
})