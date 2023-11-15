import { defineStore } from "pinia";
import { ref } from 'vue'

export const useClinicasStore = defineStore("clinicas",{
    //data reactive
    state: () => ({
        clinicas:ref([])
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
            console.log(this.arreglo.value)
        }
    }
})