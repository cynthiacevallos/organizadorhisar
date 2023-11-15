<template>
    <div class="modal-container" v-show="showModal">
        <Modal titulo="Cupos disponibles" :cerrar="mostrarModal" ></Modal>
    </div>

    <div class="main">  
        <Sidenav :lista="arreglo" :usuario="user" :centro="centro" />
        <div class="content">
            <Header />
            <div class="content-cupos">
                <h2>GESTION DE CUPOS</h2>
                <div class="content-cupos-busqueda">
                    <label for="clinica">Clinica</label>  
                    <Select id="clinica" :opciones="clinicas" ancho="400px" /> 
                    <Button title="BUSCAR" background="#FFF"  bgColor="#A1CE57" iconos="magnifying-glass" font="#000" />
                </div>
            </div>  
            <div class="resultados-busqueda">
                <div class="btns-busqueda">
                    <Button @click="goAddPaciente" title="AGREGAR PACIENTE" background="#FFF"  bgColor="#00A79C"  iconos="plus" font="#000" />
                    <Button @click="mostrarModal" title="CUPOS DISPONIBLES" background="#FFF" bgColor="rgba(59,153,213,0.55)"  iconos="circle-check" font="#000" />
                </div>
                <TablaH :header="headers" :data="datos" />
            </div>    
        </div>

    </div>    
</template>

<style scoped>
*{
    width: 100%;
}
.main{
    display: flex;
    /*width: 100%;*/
}
.content{
    display: flex;
    flex-direction: column;
    gap:20px
}
.content-cupos{
    padding-left: 20px;
    width: fit-content;
}
.content-cupos h2{
    font-weight: 600;
}
.content-cupos-busqueda{
    margin-top: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
}
.content-cupos-busqueda label{
    font-weight: normal;
    font-size: 18px;
    padding-right: 50px;
    width: fit-content;
}
.resultados-busqueda{
    padding: 30px 20px;
}
.btns-busqueda{
    margin-bottom: 20px;
    display: flex;
    gap: 5px;
}
.modal-container{
    position:fixed;
    background-color: rgba(255,255,255,0.33);
    height: 100%;
}
</style>

<script setup>
    import { reactive, ref } from 'vue'
    import {useRouter} from 'vue-router'
    import axios from 'axios';

    import Sidenav from '../../components/hisar_comp/SidenavH.vue'
    import Header from '../../components/hisar_comp/HeaderH.vue'
    import Select from '../../components/hisar_comp/InputSelect.vue'
    import Button from '../../components/hisar_comp/ButtonH.vue'
    import TablaH from '../../components/hisar_comp/TablaHi.vue'
    import Modal from '../../components/hisar_comp/ModalH.vue'
    //import { useClinicasStore } from '../stores/store'    
    const router = useRouter()

    const user= "USUARIO 1"
    const centro="Centro Nacional de Salud Renal"
    const showModal = ref(false)
   
    const mostrarModal = () =>{
        showModal.value = !showModal.value
    }
    const goAddPaciente = () => {
        router.push({path:'/gestion/cupos/add'})
    }   
    const clinicas = reactive(["Sin datos "])
    const arreglo = reactive([
        {main: 'Gestion de cupos',sec:[{name:'Inicio',link:''},{name:'Asignar Cupo',link:'/gestion/cupos/add'},{name:'Record Asignaciones',link:'/gestion/cupos/asignaciones'},{name:'Lista de espera',link:'/gestion/cupos/listaespera'},{name:'Reporte + Acreditacion',link:'/gestion/cupos/reportes'}], done:true},
        {main: 'Seguridad',sec:[{name:'Cambio de contraseña',link:'/seguridad'}],done:true}
    ])
    const headers = [
        {nombre:'CLINICA'},{nombre:'CUPOS TOTALES'},{nombre:'CUPOS DISPONIBLES'},{nombre:'CUPOS OCUPADOS'}
    ]
    const datos = [
        {clinica:'CENTRO NACIONAL DE SALUD RENAL',cuposTotales:200,cuposDisponibles:200,cuposOcupados:200}
    ]

    const getClinicas = () => {
        axios.post("http://10.0.54.105:5173/"+"api/api/token/",{
            username: "cnsr",
            password: "123456",
        }).then((response)=>{
            let result = response.data.access
            //console.log(result)
            axios.get("http://10.0.54.105:5173/"+"api/cas/",{
                headers:{ Authorization: "Bearer " + result },
            }).then((res)=>{
                return res.data                
            })
        })
    }
    
    getClinicas()
    //console.log(window.innerWidth)
</script>