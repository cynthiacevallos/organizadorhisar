import { defineStore } from "pinia";
import { ref } from 'vue'

export const useClinicasStore = defineStore("clinicas",{
    //data reactive
    state: () => ({
        clinicas:ref([1,2,3,4,5,6,7])
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