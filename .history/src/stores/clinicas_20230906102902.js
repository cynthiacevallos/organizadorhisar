import { defineStore } from "pinia";
//import { ref } from 'vue'

export const useClinicasStore = defineStore("clinicas",{
    //data reactive
    state: () => ({
        clinicas:[1,2,4,5,6,7,8],
        count: 0,

    }),
    //computed
    getters:{
        
    },
    //methods
    actions:{
        increment (){
            this.count++
        },
        addItem(item){
            this.arreglo.values.push(item)
        },
        getItems: (state) => console.log(state.clinicas)
        
    }
})