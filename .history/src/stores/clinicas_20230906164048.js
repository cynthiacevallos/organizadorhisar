import { defineStore } from "pinia";
import { computed, ref } from 'vue'
import axios from 'axios';

export const useClinicasStore = defineStore("clinicas",() =>{

    const clinicas = ref([])
    const clinicasDatos = ref([])
    const getClinicas = computed(()=> clinicas.value)
    ///const getClinicaById = computed(() => )
    const getDatosClinicas = computed(()=>clinicasDatos.value)

    const consultarClinicas = async() => {
       axios.post("http://10.0.54.105:90/"+"apis/api/token/",{
            username: "cnsr",
            password: "123456",
        }).then((response)=>{
            let result = response.data.access
            axios.get("http://10.0.54.105:90/"+"apis/cas/",{
                headers:{ Authorization: "Bearer " + result },
            }).then((res)=>{
                for(let i = 0; i<res.data.length; i++){
                    clinicas.value.push(res.data[i].descripCas)
                    clinicasDatos.value.push(res.data[i])
                }
            })
        })
    }

    const clinicaById = async(id) => {
        let result = await axios.post("http://10.0.54.105:90/"+"apis/api/token/",{
            username: "cnsr",
            password: "123456",
        })
        //console.log(result.data.access)
        let resultado = await axios.get("http://10.0.54.105:90/"+"apis/cas/"+id+"/",{
            headers:{ Authorization: "Bearer " + result.data.access },
        })
        console.log(resultado.data)
        return resultado
        /*axios.post("http://10.0.54.105:90/"+"apis/api/token/",{
            username: "cnsr",
            password: "123456",
        }).then((response)=>{
            let result = response.data.access
            axios.get("http://10.0.54.105:90/"+"apis/cas/"+id+"/",{
                headers:{ Authorization: "Bearer " + result },
            }).then((res)=>{
                //console.log(res.data)
                return res.data
            })
        })*/
    }

    return {
        getDatosClinicas,
        getClinicas,
        consultarClinicas,
        clinicaById
    }    
})