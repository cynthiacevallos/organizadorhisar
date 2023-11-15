<template>
    <div class="main">
        <Sidenav :lista="arreglo" :usuario="user" :centro="centro" />
        <div class="content">
            <Header />
            <div class="content-busqueda">
                <h2>RECORD ASIGNACIONES</h2>
                <div class="content-cupos-busqueda">
                    <label for="dni">DNI</label>
                    <Input id="dni" ancho="400px" placeholder="Ingrese el DNI de paciente" />
                    <Button title="BUSCAR" background="#A1CE57" bgColor="#A1CE57" iconos="magnifying-glass" font="#fff" />
                </div>
                <h4 >Resultados</h4>
                <Tabla :header="headers" :data="datos" :displayBtns="true"/>
            </div>
        </div>
    </div>
</template>

<style scoped>
* {
    width: 100%;
}
.main {
    display: flex;
    /*width: 100%;*/
}
.content {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.content-busqueda {
    padding-left: 20px;
}

.content-busqueda h2 {
    padding-bottom: 20px;
}
.content-busqueda h3{
    text-align: start;
}
.content-cupos-busqueda {
    margin-top: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding-bottom: 50px;
}

.content-cupos-busqueda label {
    font-weight: normal;
    font-size: 18px;
    padding-right: 50px;
    width: fit-content;
}
</style>

<script setup>
import {reactive} from 'vue'

import Sidenav from '../../components/hisar_comp/SidenavH.vue'
import Header from '../../components/hisar_comp/HeaderH.vue'
import Button from '../../components/hisar_comp/ButtonH.vue'
import Input from '../../components/hisar_comp/InputH.vue'
import Tabla from '../../components/hisar_comp/TablaHi.vue'

const arreglo = reactive([
    {main: 'Gestion de cupos',sec:[{name:'Inicio',link:'/'},{name:'Asignar Cupo',link:'/gestion/cupos/add'},{name:'Record Asignaciones',link:'/gestion/cupos/asignaciones'},{name:'Lista de espera',link:'/gestion/cupos/listaespera'},{name:'Reporte + Acreditacion',link:'/gestion/cupos/reportes'}], done:true},
    {main: 'Seguridad',sec:[{name:'Cambio de contraseña',link:'/seguridad'}],done:true}
])
const user = 'USUARIO 1'
const centro = 'Centro Nacional de Salud Renal'
const headers = [
    { nombre: 'PACIENTE' },
    { nombre: 'CLINICA' },
    { nombre: 'FRECUENCIA' },
    { nombre: 'TURNO' },
    { nombre: 'ACCIONES' }
]
const datos = [
    {
        clinica: 'MARIA YSABEL ZUÑIGA MOSTACERO',
        cuposTotales: 'CENTRO NACIONAL DE SALUD RENAL',
        cuposDisponibles: 'LUN-MIE-VIE',
        cuposOcupados: 2
    }
]
</script>
