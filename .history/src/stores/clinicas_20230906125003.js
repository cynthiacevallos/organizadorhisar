import { defineStore } from "pinia";
import { computed, ref } from 'vue'
import axios from 'axios';




export const useClinicasStore = defineStore("clinicas",() =>{
    const RUTA_SERVIDOR = process.env.VUE_APP_RUTA_HISAR

    const clinicas = ref([])
    const clinicasDatos = ref([])
    const getClinicas = computed(()=> clinicas.value)
    const getDatosClinicas = computed(()=>clinicasDatos.value)
    const consultarClinicas = () => {
        axios.post(RUTA_SERVIDOR"+"apis/api/token/",{
            username: "cnsr",
            password: "123456",
        }).then((response)=>{
            let result = response.data.access
            axios.get("http://10.0.54.105:5173/"+"apis/cas/",{
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