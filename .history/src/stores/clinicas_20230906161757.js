import { defineStore } from "pinia";
import { computed, reactive } from 'vue'
import axios from 'axios';

export const useClinicasStore = defineStore("clinicas",() =>{

    const clinicas = reactive([])
    const clinicasDatos = reactive([])
    const getClinicas = computed(()=> clinicas.value)
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

    const clinicaById = (id) => {
        axios.post("http://10.0.54.105:90/"+"apis/api/token/",{
            username: "cnsr",
            password: "123456",
        }).then((response)=>{
            let result = response.data.access
            axios.get("http://10.0.54.105:90/"+"apis/cas/"+id+"/",{
                headers:{ Authorization: "Bearer " + result },
            }).then((res)=>{
                console.log(res.data)
                //return res.data
            })
        })
    }

    return {
        getDatosClinicas,
        getClinicas,
        consultarClinicas,
        clinicaById
    }    
})