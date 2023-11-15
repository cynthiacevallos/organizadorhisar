import axios from "axios"
import { defineStore } from "pinia";
import { ref } from "vue";
import { useClinicasStore } from "./clinicas";

export const RUTA_SERVIDOR = import.meta.env.VITE_APP_RUTA_HISAR;
export const USUARIO_HISAR = import.meta.env.VITE_APP_HISAR_USERNAME;
export const PASSWORD_HJSAR = import.meta.env.VITE_APP_HISAR_PASSWORD;

export const useUsuarioStore = defineStore('usuarios', () => {
    const user = ref({
        num_doc: '',
        nombres: '',
        perfil:'',
        clinica: '',
        contra: '',
        usuario: ''
    })
    const exito = ref(false)
    const storeCas = useClinicasStore()


    async function getUserByDni(dni) {
        const res = await axios.post(RUTA_SERVIDOR + "apis/api/token/", {
            username: USUARIO_HISAR,
            password: PASSWORD_HJSAR,
        })
        const rpta = await axios.get(RUTA_SERVIDOR + "apis/usuario/?search=" + dni, {
            headers: { Authorization: "Bearer " + res.data.access },
        })
        user.value.num_doc = rpta.data[0].num_doc
        user.value.nombres = rpta.data[0].nombre
        user.value.clinica = rpta.data[0].datosCas.descripCas
        user.value.contra = rpta.data[0].clave
        user.value.usuario = rpta.data[0].usuario
        user.value.perfil = rpta.data[0].perfil
        // console.log(rpta.data[0].datosCas.url.split("/")[4])
        // 
        await storeCas.getCLinicaById(rpta.data[0].datosCas.url.split("/")[4])
    }
    async function autenticacion(usuario, passw) {
        await getUserByDni(usuario)
        if (user.value.usuario == usuario && user.value.contra == passw) {
            exito.value = true
        } else {
            exito.value = false
        }
    }

    



    return { user, exito, getUserByDni, autenticacion, }
},
{
    persist: { storage: sessionStorage, }
})