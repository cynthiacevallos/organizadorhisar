import { defineStore } from "pinia";
import { ref } from 'vue'

export const useClinicasStore = defineStore("clinicas",{
    //data reactive
    state: () => ({
        arreglo: [1,2,3,4,5]
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