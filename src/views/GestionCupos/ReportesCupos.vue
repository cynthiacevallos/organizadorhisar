<template>
    <div class="main">
        <Sidenav :lista="arreglo" :usuario="user" :centro="centro" />
        <div class="content">
            <Header />
            <div class="content-records">
                <h2>REPORTES</h2>
                <div class="content-records-busqueda">
                    <label for="dni">Clinica</label>
                    <Select id="dni" ancho="30vw" :opciones="clinicas" />
                    <Button title="BUSCAR" background="#A1CE57" bgColor="#A1CE57" iconos="magnifying-glass" font="#fff" />
                </div>
                <div class="content-botones">
                    <Button title="GENERAR EXCEL" background="#008000" iconos="file-excel" font="#FFF" bgColor="#008000" />
                </div>
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
.content-records {
    padding-left: 20px;
}
.content-records h2 {
    padding-bottom: 20px;
}
.content-records-busqueda {
    margin-top: 10px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    padding-bottom: 20px;
}
.content-records-busqueda label {
    font-weight: normal;
    font-size: 18px;
    padding-right: 50px;
    width: fit-content;
}
.content-botones {
    /*padding-left: 110px;*/
    display: flex;
    flex-wrap: wrap;
}
</style>

<script setup>
import {reactive} from 'vue'

import Sidenav from '../../components/hisar_comp/SidenavH.vue'
import Header from '../../components/hisar_comp/HeaderH.vue'
import Button from '../../components/hisar_comp/ButtonH.vue'
import Select from '../../components/hisar_comp/InputSelect.vue'

const arreglo = reactive([
    {main: 'Gestion de cupos',sec:[
        {name:'Inicio',link:'/main',icon: 'house'},
        {name:'Asignar Cupo',link:'/cupos/add',icon: 'pen-to-square'},
        {name:'Record Asignaciones',link:'/cupos/asignaciones',icon: 'clipboard'},
        {name:'Lista de espera',link:'/cupos/listaespera',icon: 'list-ol'},
        {name:'Reporte + Acreditacion',link:'/cupos/reportes',icon: 'table'}], done:true},
    // {main: 'Seguridad',sec:[{name:'Cambio de contraseña',link:'/seguridad'}],done:true}
])
const user = 'USUARIO 1'
const centro = 'Centro Nacional de Salud Renal'

const clinicas = [
    'RENEXA'
]
</script>