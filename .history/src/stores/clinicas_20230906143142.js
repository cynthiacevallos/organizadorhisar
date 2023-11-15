import { defineStore } from "pinia";
import { computed, ref } from 'vue'
import axios from 'axios';

export const RUTA_SERVIDOR = import.meta.env.VUE_APP_RUTA_HISAR

export const useClinicasStore = defineStore("clinicas",() =>{

    const clinicas = ref([])
    const clinicasDatos = ref([])
    const getClinicas = computed(()=> clinicas.value)
    const getDatosClinicas = computed(()=>clinicasDatos.value)
    import axios from "axios";

// // The base URL for API requests
const API_URL = "/api";

// Create an instance of axios with the base URL of the API
const api = axios.create({
  baseURL: API_URL
});


    const consultarClinicas = () => {
        axios.post(RUTA_SERVIDOR + "/apis/api/token/",{
            username: "cnsr",
            password: "123456",
        }).then((response)=>{
            let result = response.data.access
            axios.get(RUTA_SERVIDOR + "/apis/cas/",{
                headers:{ Authorization: "Bearer " + result },
            }).then((res)=>{
                for(let i = 0; i<res.data.length; i++){
                    clinicas.value.push(res.data[i].descripCas)
                    clinicasDatos.value.push(res.data[i])
                }
            })
        })
    }
    return {
        getDatosClinicas,
        getClinicas,
        consultarClinicas
    }    
})