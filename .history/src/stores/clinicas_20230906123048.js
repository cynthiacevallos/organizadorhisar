import { defineStore } from "pinia";
import { computed, ref } from 'vue'
import axios from 'axios';

export const RUTA_SERVIDOR = import.meta.env.VUE_APP_RUTA_HISAR;
export const USUARIO_HISAR = import.meta.env.VUE_APP_HISAR_USERNAME;
export const PASSWORD_HJSAR = import.meta.env.VUE_APP_HISAR_PASSWORD;


export const useClinicasStore = defineStore("clinicas",() =>{
    const clinicas = ref([])
    const clinicasDatos = ref([])
    const getClinicas = computed(()=> clinicas.value)
    const getDatosClinicas = computed(()=>clinicasDatos.value)
    const consultarClinicas = () => {
        axios.post(RUTA_SERVIDOR+"/api/api/token/",{
            username: "cnsr",
            password: "123456",
        }).then((response)=>{
            let result = response.data.access
            axios.get(RUTA_SERVIDOR+"/api/cas/",{
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