import axios from 'axios';
import { defineStore } from "pinia";
import { ref } from 'vue'

export const RUTA_SERVIDOR = import.meta.env.VITE_APP_RUTA_HISAR;
export const USUARIO_HISAR = import.meta.env.VITE_APP_HISAR_USERNAME;
export const PASSWORD_HJSAR = import.meta.env.VITE_APP_HISAR_PASSWORD;

export const useClinicasStore = defineStore("clinicas",() =>{
    const clinicas = ref([])
    const clinica = ref({
       id:'',
       nombre:'',
    })

    async function getClinicas(){
        // ?search=true,2
        const res = await axios.post(RUTA_SERVIDOR + "apis/api/token/", {
            username: USUARIO_HISAR,
            password: PASSWORD_HJSAR,
        })
        const rpta = await axios.get(RUTA_SERVIDOR + "apis/cas/?search=true,2" , {
            headers: { Authorization: "Bearer " + res.data.access },
        })
        clinicas.value = rpta.data
    }

    async function getCLinicaById(id){
        const res = await axios.post(RUTA_SERVIDOR + "apis/api/token/", {
            username: USUARIO_HISAR,
            password: PASSWORD_HJSAR,
        })
        const rpta = await axios.get(RUTA_SERVIDOR + "apis/cas/" + id+"/", {
            headers: { Authorization: "Bearer " + res.data.access },
        })
        clinica.value.id = rpta.data.url.split("/")[4]
        clinica.value.nombre = rpta.data.descripCas
    }


    return { clinicas,clinica,getCLinicaById,getClinicas }

},
{
    persist: { storage: sessionStorage, }
})