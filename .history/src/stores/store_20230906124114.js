//import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios"
import { reactive } from 'vue';

export const RUTA_SERVIDOR = import.meta.env.VUE_APP_RUTA_HISAR;
export const USUARIO_HISAR = import.meta.env.VUE_APP_HISAR_USERNAME;
export const PASSWORD_HJSAR = import.meta.env.VUE_APP_HISAR_PASSWORD;

export const useClinicasStore = defineStore("clinicas", () => {
    const clinicas = reactive([
      
    ]);
    const getClinicas = async() =>  {
        let reusltado = await axios.post(RUTA_SERVIDOR + "/APICNSR/api/token/",{
            username: "cnsr",
            password: "123456",
        }) 
        let result = await axios.get(RUTA_SERVIDOR+"/APICNSR/cas",{
            headers: { Authorization: "Bearer " + reusltado.data.access },
        })
        clinicas.value = result.data
        //this.clinicas = result.data
    }
    return {
        clinicas,
        getClinicas,
    }

    /*state: () => ({
        clinicas:[],        
    }),
    getters:{
        getClinicas: () => {
            //return state.clinicas
        }
    },
    actions:{
        async listaClinicas  () {
            this.clinicas = [];
            try{
                let reusltado = await axios.post(RUTA_SERVIDOR+"/api/api/token/",{
                    username: "cnsr",
                    password: "123456",
                }) 
                let result = await axios.get(RUTA_SERVIDOR+"/api/cas",{
                    headers: { Authorization: "Bearer " + reusltado.data.access },
                })
                this.clinicas = result.data
            }catch(e){
                console.log(e)
            }
        }
    }*/


})
export default useClinicasStore