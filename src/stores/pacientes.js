// import axios from "axios"
import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const RUTA_SERVIDOR = import.meta.env.VITE_APP_RUTA_HISAR;
export const USUARIO_HISAR = import.meta.env.VITE_APP_HISAR_USERNAME;
export const PASSWORD_HJSAR = import.meta.env.VITE_APP_HISAR_PASSWORD;

export const usePacientesStore = defineStore("pacientes", () =>{
    const pacientes = ref([])
    const paciente = ref({})
    const loading = ref(false)

    const getPacientes = async () => {
        //ALL
        loading.value = true
        // console.log('2',loading.value)
        const res = await axios.post(RUTA_SERVIDOR + "apis/api/token/", {
            username: USUARIO_HISAR,
            password: PASSWORD_HJSAR,
        })
        const rpta = await axios.get(RUTA_SERVIDOR + "apis/paciente/" , {
            headers: { Authorization: "Bearer " + res.data.access },
        })
        pacientes.value = rpta.data
        loading.value=false
        // console.log('22',loading.value)
    }

    const getPacienteByDni = async (dni) => {
        const res = await axios.post(RUTA_SERVIDOR + "apis/api/token/", {
            username: USUARIO_HISAR,
            password: PASSWORD_HJSAR,
        })
        const rpta = await axios.get(RUTA_SERVIDOR + "apis/paciente/?search="+dni , {
            headers: { Authorization: "Bearer " + res.data.access },
        })
        paciente.value = rpta.data
    }

    const getPacientesByClinidaId = async (id) => {
        // Cupos de Pacientes por Clinica ID
        const res = await axios.post(RUTA_SERVIDOR + "apis/api/token/", {
            username: USUARIO_HISAR,
            password: PASSWORD_HJSAR,
        })
        const rpta = await axios.get(RUTA_SERVIDOR + "apis/asigCuposPac/?search="+id , {
            headers: { Authorization: "Bearer " + res.data.access },
        })
        pacientes.value = rpta.data
    }

    return { pacientes,loading,getPacientesByClinidaId,getPacientes,getPacienteByDni,paciente }
})