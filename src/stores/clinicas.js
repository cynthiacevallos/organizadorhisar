import axios from 'axios';
import { defineStore } from "pinia";
import { ref } from 'vue'

export const RUTA_SERVIDOR = import.meta.env.VITE_APP_RUTA_HISAR;
export const USUARIO_HISAR = import.meta.env.VITE_APP_HISAR_USERNAME;
export const PASSWORD_HJSAR = import.meta.env.VITE_APP_HISAR_PASSWORD;
export const RUTA_LOCAL = import.meta.env.VITE_APP_RUTA_LOCAL


export const useClinicasStore = defineStore("clinicas", () => {
    const loading = ref(true);
    const clinicas = ref([])
    const clinica = ref({
        id: '',
        nombre: '',
    })
    const cupos = ref(0)
    const ocupados = ref(0)
    const error = ref(false)

    async function getClinicas() {
        // ?search=true,2
        loading.value = true;
        // console.log('1', loading.value)

        const res = await axios.post(RUTA_SERVIDOR + "apis/api/token/", {
            username: USUARIO_HISAR,
            password: PASSWORD_HJSAR,
        })
        const rpta = await axios.get(RUTA_SERVIDOR + "apis/cas/?search=true,2", {
            headers: { Authorization: "Bearer " + res.data.access },
        })
        clinicas.value = await rpta.data
        loading.value = false
        // console.log('2', loading.value)
    }

    async function getCLinicaById(id) {
        const res = await axios.post(RUTA_SERVIDOR + "apis/api/token/", {
            username: USUARIO_HISAR,
            password: PASSWORD_HJSAR,
        })
        const rpta = await axios.get(RUTA_SERVIDOR + "apis/cas/" + id + "/", {
            headers: { Authorization: "Bearer " + res.data.access },
        })
        clinica.value.id = rpta.data.url.split("/")[4]
        clinica.value.nombre = rpta.data.descripCas
    }

    async function getCapacidadClinicaById(id){

        const res = await axios.post(RUTA_SERVIDOR + "apis/api/token/", {
            username: USUARIO_HISAR,    
            password: PASSWORD_HJSAR,
        })
        const rpta = await axios.get(RUTA_SERVIDOR + "apis/parameCentroPuesto/?search="+id, {
            headers: { Authorization: "Bearer " + res.data.access },
        })
        
        cupos.value = await rpta.data.length
    }

    async function getCapacidadOcupadaClinicaById(id){
        const res = await axios.post(RUTA_SERVIDOR + "apis/api/token/", {
            username: USUARIO_HISAR,    
            password: PASSWORD_HJSAR,
        })
        const rpta = await axios.get(RUTA_SERVIDOR + "apis/asigCuposPac/?search="+id, {
            headers: { Authorization: "Bearer " + res.data.access },
        })
        ocupados.value = await rpta.data.length
    }

    return { clinicas, clinica, cupos, ocupados,error, loading, getCLinicaById, getClinicas,getCapacidadClinicaById,getCapacidadOcupadaClinicaById }

})